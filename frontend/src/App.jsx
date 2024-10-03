import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/Authprovider'
function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
      <Course /> */}
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/Signup"/>}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Toaster />
     </div>
    </>
  )
}

export default App