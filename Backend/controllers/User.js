const User= require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'dsjgfesjgvfsjgfvjdsgvfdsgvjisgvjisgjfd';
exports.createsignup = async (req, res)=>{
    const { name, email, password,phoneNumber,Role } = req.body;
    console.log('>>>>>>req.body>>>>', req.body)

    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);;
    const hash = bcrypt.hashSync(password,salt)

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(400).json({ message: "User already exist"});
    }
    if(!(name && email && password && phoneNumber && Role))
    {
        return res.status(400).json({ message: "all fields are required"});
    }
    const data = {name, email,phoneNumber,Role, password: hash};
    const user = new User(data);
    console.log(">>data>>>",data)
    await user.save();
    res.status(200).json(user);
};

exports.login = async(req, res)=>{
    const {email,password} = req.body
    console.log('>>>>>>>req.body>>>>', req.body)
    if(!(email && password))
    {
        return res.status(400).json({message:"all fields are required"})
    }

    const existingUser = await User.findOne({email})
    if(!(existingUser))
    {
        return res.status(400).json({message:"User not found"})

    }

    const match = await bcrypt.compare(password,existingUser.password)
    if(!(match))
    {
        return res.status(400).json({message:"Invalid password"})
    }

    const token = jwt.sign({id:existingUser._id},secret
        , { expiresIn: '15m' }
    )

    console.log('>>>>>>>>>>>>token')

    res.json({token,existingUser})
};


