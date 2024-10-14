const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema(
    {
        StudentName:{
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
        BatchName:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Class',
            require:true,
        },
        JoiningDate:{
            type:Date,
            require:true,
        },
        RollNo:{
            type:Number,
            require:true
        },
        Gender:{
            type:String,
            require:true
        },
        Fees:{
            type:Number,
            require:true
        },

    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("Student",StudentSchema);