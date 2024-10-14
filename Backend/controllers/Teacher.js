const Teacher = require('../models/Teacher');
const Class = require('../models/Batch')
exports.CreateTeacher = async(req,res)=>{
    const data = req.body;
    const {Email} = req.body;
    const existingTeacher = await Teacher.findOne({Email})
    console.log('>>>>existingTeacher>>>>', existingTeacher);
    if(existingTeacher)
    {
        return res.status(400).json({message:"Teacher already exists"});
    }
    const teacher = new Teacher(data);
    await teacher.save();
    res.status(200).json(teacher);
};

exports.getAllTeacher = async(req,res)=>{
    const teacher = await Teacher.find().populate("BatchName");
    console.log('>>>>Teacher>>>>');
    res.status(200).json(teacher);
};

exports.getSingleTeacher = async(req,res)=>{
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    if(!teacher)
    {
        return res.status(400).json({message:'Teacher not available'});
    }
    res.status(200).json(teacher);
};

exports.updateTeacher = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const teacher = await Teacher.findByIdAndUpdate(id, data);
    console.log(">>>>data>>>>>");
    res.status(200).json(teacher);
};

exports.deleteTeacher = async(req,res)=>{
    const id = req.params.id;
    const teacher = await Teacher.findByIdAndDelete(id);
    res.status(200).json(teacher);
}