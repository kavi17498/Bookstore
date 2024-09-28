import React, { useEffect, useState } from 'react'
import Login from './Login';
const navitems = (<>
    <li><a href='/'>Home</a></li>
        <li><a href='/course'>Course</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li> 
</>)
function Navbar() {
  const [sticky,seticky]=useState(false);
  const[theme,setTheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
  const element= document.documentElement;
  useEffect(()=>{
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme","dark")
      document.body.classList.add("dark")
      
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
      document.body.classList.remove("dark");

    }
  },[theme])
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>0){
        seticky(true);
      }else{
        seticky(false)
      }
    }
    window.addEventListener('scroll',handleScroll);
  })
  return (
    <>
    <div className={`z-15 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${sticky?"sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out":""}`}>
    <div className='mx-10'>
    <div className="navbar">
    <div className="flex-1">
      <a className="text-2xl font-bold cursor-pointer">bookStore</a>
    </div>
    <div className="flex-none dark:bg-slate-900 dark:text-white">
      <ul className="menu menu-horizontal px-1">
           {navitems}
      </ul>
      <div className=' space-x-4'>
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    
      <label className="swap swap-rotate ">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller mt-5" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

      <a className="btn" onClick={()=> document.getElementById("my_modal_2").showModal()}>LogIn</a>
      </div>
      <Login />
      
    </div>
  </div></div></div>
  </>
  )
}

export default Navbar