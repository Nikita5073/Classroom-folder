import React from 'react'
import './App.css'
import Header from './Page/Header/Header'
import Signup from './Page/Signup/Signup'
import Login from './Page/Login/Login'
import Class from './Page/Class/Class'
import Addclass from './Page/Class/Addclass'
import Listclass from './Page/Class/Listclass'
import Teacher from './Page/Teacher/Teacher'
import AddTeacher from './Page/Teacher/AddTeacher'
import TeacherList from './Page/Teacher/TeacherList'
import Student from './Page/Student/Student'
import AddStudent from './Page/Student/AddStudent'
import StudentList from './Page/Student/StudentList'
import Dashboard from './Page/Dashboard/Dashboard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/class" element={<Class />} />
      <Route path="/add-class" element={<Addclass />} />
      <Route path="/list-class" element={<Listclass />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/add-teacher" element={<AddTeacher />} />
      <Route path="/teacher-list" element={<TeacherList />} />
      <Route path="/student" element={<Student />} />
      <Route path="/add-Student" element={<AddStudent />} />
      <Route path="/student-list" element={<StudentList />} />
      <Route path="/" element={<Dashboard />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
