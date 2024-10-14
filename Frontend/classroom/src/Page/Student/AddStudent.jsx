import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css'

const AddStudent = () => {
    const [StudentData, setStudentData] = useState({
        StudentName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        Qualification: '',
        // BatchName: '',
        JoiningDate: '',
        RollNo: '',
        Gender: '',
        Fees: '',
    });

    const navigate = useNavigate();

    const [classes, setClasses] = useState([])
    const [selectedBatch, setSelectedBatch] = useState('');
    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const token = localStorage.getItem('token');
        try{
        const response = await axios.get(`http://localhost:5000/batch`,{headers:{'Authorization': `Bearer ${token}`}});
        console.log('>>>>response>>>>', response.data, token);
        setClasses(response.data);
        } catch(error){
            console.log("error in fetching", error)
        }
    };

    const handleBatchSelect = (event) => {
        setSelectedBatch(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(StudentData);
        const token = localStorage.getItem('token');
        try{
        const res = await axios.post("http://localhost:5000/student", StudentData, {headers:{'Authorization': `Bearer ${token}`}} );
        console.log('>>>>res>>>', res, token);
        if (res.status === 200) {
            alert("Student successfully created");
        }

        navigate('/student-list')
    } catch(error)
    {
        console.log("error in fetching", error)
    }
    };

    return (
        <div className="student-form-container">
    <h2 className="form-title">Add Student</h2>
    <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Student Name:</label>
            <input type="text" name="name" value={StudentData.StudentName} onChange={(e) => setStudentData({ ...StudentData, StudentName: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={StudentData.Email} onChange={(e) => setStudentData({ ...StudentData, Email: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Phone Number:</label>
            <input type="number" name="phoneNumber" value={StudentData.PhoneNumber} onChange={(e) => setStudentData({ ...StudentData, PhoneNumber: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={StudentData.Address} onChange={(e) => setStudentData({ ...StudentData, Address: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Qualification:</label>
            <input type="text" name="qualification" value={StudentData.Qualification} onChange={(e) => setStudentData({ ...StudentData, Qualification: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Batch Name:</label>
            <select onChange={handleBatchSelect} value={selectedBatch} required>
                <option value="">Select Batch</option>
                {classes.map((Item) => (
                    <option key={Item.id} value={Item._id}>
                        {Item.BatchName}
                    </option>
                ))}
            </select>
        </div>
        <div className="form-group">
            <label>Roll No:</label>
            <input type="number" name="rollNo" value={StudentData.RollNo} onChange={(e) => setStudentData({ ...StudentData, RollNo: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Gender:</label>
            <input type="text" name="gender" value={StudentData.Gender} onChange={(e) => setStudentData({ ...StudentData, Gender: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Joining Date:</label>
            <input type="date" name="joiningDate" value={StudentData.JoiningDate} onChange={(e) => setStudentData({ ...StudentData, JoiningDate: e.target.value })} required />
        </div>
        <div className="form-group">
            <label>Fees:</label>
            <input type="number" name="fees" value={StudentData.Fees} onChange={(e) => setStudentData({ ...StudentData, Fees: e.target.value })} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
    </form>
</div>

    );
};

export default AddStudent;
