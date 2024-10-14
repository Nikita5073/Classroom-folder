// import React,{useState} from 'react'
// import axios from"axios"
// const SignUp = () => {
//     const[name, setName] = useState('');
//     const[email, setEmail] = useState('');
//     const[password, setPassword] = useState('');
//     const handlesubmit= async (e)=>{
//         e.preventDefault();
//         console.log(name,email,password)
//         // const res=  await axios.post("http://localhost:3000/batch/resgiter",{name,email,password})
//         // console.log(res)

        
//     }
//   return (
//     <div>
//     <h2>Sign Up</h2>
//     <form onSubmit={handlesubmit}>
//     <label>Name:</label>
//     <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
//     <label>Email:</label>
//     <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
//     <label>Password:</label>
//     <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
//     <button>Sign Up</button>
//     </form>
//     </div>
//   )
// }

// export default SignUp