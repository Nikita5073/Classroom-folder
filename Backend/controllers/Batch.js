const Class = require('../models/Batch');

exports.CreateBatch = async(req,res)=>{
    const data = req.body;
    const {BatchName} = req.body;
    const existingBatch = await Class.findOne({BatchName})
    console.log('>>>>existingBatch>>>>', existingBatch);
    if(existingBatch)
    {
        return res.status(400).json({message:"Batch already exists"});
    }
    const batch = new Class(data);
    await batch.save();
    res.status(200).json(batch);
};

exports.getAllBatch = async(req,res)=>{
    const batch = await Class.find();
    console.log('>>>>batch>>>>', batch);
    res.status(200).json(batch);
};

exports.getSingleBatch = async(req,res)=>{
    const id = req.params.id;
    const batch = await Class.findById(id);
    if(!batch)
    {
        return res.status(400).json({message:'batch not available'});
    }
    res.status(200).json(batch);
};

exports.updateBatch = async(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const batch = await Class.findByIdAndUpdate(id, data);
    console.log(">>>>data>>>>>");
    res.status(200).json(batch);
};

exports.deleteBatch = async(req,res)=>{
    const id = req.params.id;
    const batch = await Class.findByIdAndDelete(id);
    res.status(200).json(batch);
}