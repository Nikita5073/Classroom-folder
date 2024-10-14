import React, { useState } from 'react';
import axios from 'axios'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {email,password};
    console.log('>>>>data>>>', data);
    const res = await axios.post("http://localhost:5000/User/login", data);
    console.log('>>>res>>>>', res.data.existingUser.Role);
    
    if(res.status === 200)
    {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem("logged_in_user_name", res.data.existingUser.name);
      console.log("token",res.data.token)
      alert('User successfully login')
    }
    if(res.data.existingUser.Role === "student")
    {
      console.log(`>>>>res.data.role>>>>>>>`,res.data.role);
      
      navigate('/add-Student')
    }
    else if(res.data.existingUser.Role === "teacher")
    {
      navigate('/add-teacher')
    }
    else if(res.data.existingUser.Role === "admin")
    {
        navigate('/')
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
