import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './AddTeacher.css'

const AddTeacher = () => {
    const [formData, setFormData] = useState({
        TeacherName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        Qualification: '',
        Salary: '',
        // BatchName: '',
        Experience: '',
        Role: '',
        Timing: '',
        Technology: '',
        JoiningDate: '',
        TeacherId: '',
    });
    
    const navigate = useNavigate();
    const [classes, setClasses] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const token = localStorage.getItem('token');
        try{
        const response = await axios.get(`http://localhost:5000/batch`, {headers:{'Authorization': `Bearer ${token}`}});
        console.log('>>>>response>>>>', response.data, token);
        setClasses(response.data);
        } catch(error){
            console.log("error in fetching", error)
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const token = localStorage.getItem('token');
        try{
        const res = await axios.post("http://localhost:5000/teacher", formData, {headers:{'Authorization': `Bearer ${token}`}})
        console.log('>>>>res>>>>', res, token)
        if (res.status === 200) {
            alert('Teacher successfully Signup');
        }

        navigate('/teacher-list')
    } catch(error){
        console.log("error in fetching", error)
    }
    };

    const handleBatchSelect = (event) => {
        setSelectedBatch(event.target.value);
    };

    return (
        <div className="add-teacher-container">
    <h2 className="form-title">Add Teacher</h2>
    <form onSubmit={handleSubmit} className="teacher-form">
        <div className="form-group">
            <label>Teacher Name:</label>
            <input 
                type="text" 
                name="name" 
                value={formData.TeacherName} 
                onChange={(e) => setFormData({ ...formData, TeacherName: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                value={formData.Email} 
                onChange={(e) => setFormData({ ...formData, Email: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Phone Number:</label>
            <input 
                type="number" 
                name="phoneNumber" 
                value={formData.PhoneNumber} 
                onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Address:</label>
            <input 
                type="text" 
                name="address" 
                value={formData.Address} 
                onChange={(e) => setFormData({ ...formData, Address: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Qualification:</label>
            <input 
                type="text" 
                name="qualification" 
                value={formData.Qualification} 
                onChange={(e) => setFormData({ ...formData, Qualification: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Salary:</label>
            <input 
                type="number" 
                name="salary" 
                value={formData.Salary} 
                onChange={(e) => setFormData({ ...formData, Salary: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Batch Name:</label>
            <select onChange={handleBatchSelect} value={selectedBatch}>
                <option value="">Select Batch</option>
                {classes.map((Item) => (
                    <option key={Item.id} value={Item._id}>
                        {Item.BatchName}
                    </option>
                ))}
            </select>
        </div>
        <div className="form-group">
            <label>Experience:</label>
            <input 
                type="number" 
                name="experience" 
                value={formData.Experience} 
                onChange={(e) => setFormData({ ...formData, Experience: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Role:</label>
            <input 
                type="text" 
                name="role" 
                value={formData.Role} 
                onChange={(e) => setFormData({ ...formData, Role: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Timings:</label>
            <input 
                type="time" 
                name="timings" 
                value={formData.Timing} 
                onChange={(e) => setFormData({ ...formData, Timing: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Technology:</label>
            <input 
                type="text" 
                name="technology" 
                value={formData.Technology} 
                onChange={(e) => setFormData({ ...formData, Technology: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Joining Date:</label>
            <input 
                type="date" 
                name="joiningDate" 
                value={formData.JoiningDate} 
                onChange={(e) => setFormData({ ...formData, JoiningDate: e.target.value })} 
                required 
            />
        </div>
        <div className="form-group">
            <label>Teacher ID:</label>
            <input 
                type="number" 
                name="teacherId" 
                value={formData.TeacherId} 
                onChange={(e) => setFormData({ ...formData, TeacherId: e.target.value })} 
                required 
            />
        </div>
        <button type="submit" className="submit-button">Submit</button>
    </form>
</div>

    );
};

export default AddTeacher;
