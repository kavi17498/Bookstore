import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"


function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_2" className="modal">
<form onSubmit={handleSubmit(onSubmit)}>
  <div className="modal-box">
    <h3 className="font-bold text-lg">LogIn</h3>
     {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email </span>
        <br />
        <input type='email' placeholder='Enter your Email'className='w-80 px-3 border rounded-md outline-none py-1'{...register("email", { required: true })}/>
        <br /> {errors.email && <span className="text-sm text-red-400">This field is required</span>}
    </div>

    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password </span>
        <br />
        <input type='password' placeholder='Enter your Password'className='w-80 px-3 border rounded-md outline-none py-1 '{...register("password", { required: true })}/>
        <br /> {errors.password && <span className="text-sm text-red-400">This field is required</span>}
    </div>
    {/* Button */}
    <div className="flex justify-between m-4">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
        <p>Not registered?<Link to="signup" className="underline text-blue-500 cursor-pointer"> Signup</Link></p>
    <br/>
    </div>
    <Link to="/" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Home</Link>
   
    

  </div>
  </form>
  

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>

    </>
  )
}

export default Login