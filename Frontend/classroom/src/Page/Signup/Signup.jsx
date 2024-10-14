import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Signup.css'; 

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Role, setRole] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {name,email,password,phoneNumber,Role};
        console.log('>>>>>data>>>>',data);
        const res = await axios.post("http://localhost:5000/User/signup",data);
        console.log('>>>>>res>>>>', res)
        if(res.status === 200)
        {
            alert('User successfully Signup')
        } else if(res.status === 400){
            alert('User already exists')
        } else if(res.status === 500){
            alert('Internal server error')
        }
        navigate('/login')

    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">PhoneNumber:</label>
                    <input
                        type="text"
                        id="Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="student"
                                checked={Role === 'student'}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="teacher"
                                checked={Role === 'teacher'}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                            Teacher
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="admin"
                                checked={Role === 'admin'}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                            Admin
                        </label>
                    </div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
