const { json } = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const BatchSchema = new mongoose.Schema(
    {
        BatchName:{
            type:String,
            require:true,
            unique:true
        },
        Subject:{
            type:String,
            require:true,
        },
        Timings:{
            type:String,
            require:true
        },
        Fees:{
            type:Number,
            require:true
        },
        WeekOff:{
            type:JSON,
            require:true
        },
        NoOfSeats:{
            type:Number,
            require:true
        },
    },
    {timestamps:true,versionKey:false}
);

module.exports = mongoose.model("Class",BatchSchema);