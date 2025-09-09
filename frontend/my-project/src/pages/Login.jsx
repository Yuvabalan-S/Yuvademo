import React, { useState } from 'react'
import axios from "axios"
import {login} from "../assets/redux/userSlice.js"
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router'

function Login() {
  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
const dispatch = useDispatch()
const navigate = useNavigate()
const handleSubmit =async(e)=>{
  e.preventDefault()
  try{
    console.log("enter data")
  const res = await axios.post("http://localhost:5005/api/user/login",{
    email,
    password
  }
  )
  dispatch(login(res.data.user))
  console.log("login successs",res)
  alert("login successsfully")
  setTimeout(()=>{
    navigate("/products")
  },1000)
}
catch(err){
  console.log(err,"login error")
}
}

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>Login Page</h1>
      <form className='bg-white p-6 rounded shadow-md w-100' 
      onSubmit={handleSubmit}>
          <input
           type="text"
           placeholder='Enter User Email'
           className='w-full border p-2 mb-3 rounded'
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
            />
            <br />
          <input 
          type="text" 
          placeholder='Enter user password'
          className='w-full border p-2 mb-3 rounded' 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
          <br />
          <button 
          type ="submit"
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition'>submit</button>
      </form>
    </div>
    </div>
  )
}

export default Login