import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
const userName = localStorage.getItem("logged_in_user_name")

  return (
    <div>
        <div className='head'>
            <ul>
            <li><Link style={{textDecoration:'none'}} to={'/'}>Dashboard</Link></li>
                <li><Link style={{textDecoration:'none'}} to={'/class'}>Class
                  <div className='dropdown'>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/add-class'}>AddClass</Link></li>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/list-class'}>ListClass</Link></li>
                  </div>
                  </Link>
                </li>
                <li><Link style={{textDecoration:'none'}} to={'/teacher'}>Teacher
                  <div className='dropdown'>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/add-teacher'}>AddTeacher</Link></li>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/teacher-list'}>TeacherList</Link></li>
                  </div>
                  </Link>
                </li>
                <li><Link style={{textDecoration:'none'}} to={'/student'}>Student
                  <div className='dropdown'>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/add-student'}>AddStudent</Link></li>
                    <li><Link style={{textDecoration:'none',color:'white'}} to={'/student-list'}>StudentList</Link></li>
                  </div>
                  </Link>
                </li>
                <li>
                  <span style={{color: "red"}}>Hi {userName}</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header