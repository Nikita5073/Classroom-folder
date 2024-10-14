const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors())

const MongoUrl = 'mongodb+srv://nikita:1234@cluster0.fsvoz6t.mongodb.net/ClassroomApi';

mongoose.connect(MongoUrl)
.then(()=>{
    console.log('connected to Mongodb');
})
.catch((err)=>{
    console.log('Error connected to Mongodb');
})

const BatchRoutes = require('./router/Batch');
app.use('/batch', BatchRoutes);

const StudentRoutes = require('./router/student');
app.use('/student', StudentRoutes);

const TeacherRoutes = require('./router/Teacher');
app.use('/teacher', TeacherRoutes);

const UserRoutes = require('./router/User');
app.use('/User', UserRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

