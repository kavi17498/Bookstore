import React from 'react'
import Login from './Login'
import { useForm} from "react-hook-form"
import axios, { Axios } from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, replace, useLocation, useNavigate } from 'react-router-dom';

function Signup() {
  const uselocation = useLocation()
  const navigate = useNavigate()
  const from =location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    const userInfo = {
    FullName:data.FullName,
    email:data.email,
    password:data.password
  }
  await axios.post("http://localhost:4001/user/signUp",userInfo)
  .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success("Signup Successfully");
      navigate(from,{replace:true})
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }
    
  }).catch((err)=>{
    if (err.response) {
      console.log(err)
      toast.error("SignUp Error" +err.response.data.message);
    }
    
  })
  }
  
  
  return (
    <>
    
      <div className="flex h-screen items-center justify-center border-[2px] shadow-md ">
      <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
  <div>
    <h3 className="font-bold text-lg ">Signup</h3>
     {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name </span>
        <br />
        <input type='text' placeholder='Enter your fullname'className='w-80 px-3 border rounded-md outline-none py-1'{...register("FullName", { required: true })}/>
        <br /> {errors.name && <span className="text-sm text-red-400">This field is required</span>}
    </div>

    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email </span>
        <br />
        <input type='email' placeholder='Enter your Email'className='w-80 px-3 border rounded-md outline-none py-1' {...register("email", { required: true })}/>
        <br /> {errors.email && <span className="text-sm text-red-400">This field is required</span>}
    </div>

    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password </span>
        <br />
        <input type='password' placeholder='Enter your Password'className='w-80 px-3 border rounded-md outline-none py-1' {...register("password", { required: true })}/>
        <br /> {errors.password && <span className="text-sm text-red-400">This field is required</span>}
    </div>
    {/* Button */}
    <div className="flex justify-between m-4">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>
        <p>Have Account ?
        <button className="underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById("my_modal_2").showModal()
        }> LogIn</button>
          <Login />
        </p>
    </div>

  </div>
  </form>

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>

      </div>
    </>
  )
}

export default Signup