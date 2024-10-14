const Student = require('../models/student');
const Class  = require('../models/Batch');
const data = {name:"nikita",age:19};

exports.CreateStudent = async(req,res)=>{
    const {name}=req.body;
    console.log(name)
    const data = req.body;
    const {Email} = req.body;
    const existingStudent = await Student.findOne({Email})
    console.log('>>>>existingStudent>>>>', existingStudent);
    if(existingStudent)
    {
        return res.status(400).json({message:"student already exists"});
    }
    const student = new Student(data);
    await student.save();
    res.status(200).json(student);
};

exports.getAllstudent = async(req,res)=>{
    const student = await Student.find().populate("BatchName");
    console.log('>>>>student>>>>');
    res.status(200).json(student);
};

exports.getSinglestudent = async(req,res)=>{
    const id = req.params.id;
    const student = await Student.findById(id);
    if(!student)
    {
        return res.status(400).json({message:'student not available'});
    }
    res.status(200).json(student);
};

exports.updatestudent = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const student = await Student.findByIdAndUpdate(id, data);
    console.log(">>>>data>>>>>");
    res.status(200).json(student);
};

exports.deletestudent = async(req,res)=>{
    const id = req.params.id;
    const student = await Student.findByIdAndDelete(id);
    res.status(200).json(student);
}