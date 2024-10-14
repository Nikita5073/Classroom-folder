const mongoose = require('mongoose');
const { type } = require('os');
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        phoneNumber:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        Role:{
            type:String,
            require:true,
            enum: ['student', 'teacher', 'admin']
        },
    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("User",UserSchema);