const mongoose = require('mongoose');
const { type } = require('os');
const TeacherSchema = new mongoose.Schema(
    {
        TeacherName:{
            type:String,
            require:true,
        },
        Email:{
            type:String,
            require:true,
            unique:true
        },
        PhoneNumber:{
            type:String,
            require:true
        },
        Address:{
            type:String,
            require:true
        },
        Qualification:{
        type:String,
        require:true
       },
       Salary:{
        type:Number,
        require:true
       },
        BatchName:{
           type:mongoose.Schema.Types.ObjectId,
            ref:'Class',
            require:true
        },
        Experience:{
            type:Number,
            require:true
        },
        Role:{
            type:String,
            require:true
        },
        Timing:{
            type:String,
            require:true
        },
        Technology:{
            type:String,
            require:true
        },
        JoiningDate:{
            type:Date,
            require:true,
        },
        TeacherId:{
            type:Number,
            require:true
        },

    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("Teacher",TeacherSchema);