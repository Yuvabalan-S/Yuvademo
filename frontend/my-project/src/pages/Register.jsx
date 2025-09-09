import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"



function Register() {
  const[formData,setFormData]= useState({
  name:"",
  email:"",
  password:""
})
const[msg,setMsg] = useState("")
const navigate = useNavigate()

const handleChange =(e)=>{
  setFormData({
    ...formData,[e.target.name]:e.target.value
  })
}
const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          console.log("data enter")
             const res = await axios.post("http://localhost:5005/api/user/register",
            formData,{
              headers:{
                "Content-Type":"application/json"
              }
            }
            )
            alert("mew user registered")
            setMsg("New user registered")
            console.log("registration sucessful",res)
            setTimeout(()=>{
                navigate("/login")
            },1000)
        }
        catch(err){
            console.log(err.response? err.response.data:err.message)
            setMsg("registration failed",err)
        }
    }


  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form  onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-100'>
        <h2 className='text-2xl font-bold mb-4'>Register Form</h2>
        <input 
        type="text"
        name="name"
        placeholder='Enter user Name'
        value={formData.name}
        onChange={handleChange}
        className='w-full border p-2 mb-3 rounded'
         />
         <br />
         <input 
         type="email"
         name='email'
         placeholder='Enter user Email'
         value={formData.email}
         onChange={handleChange}
         className='w-full border p-2 mb-3 rounded' />
         <br />
         <input 
         type="password"
         name='password'
         placeholder='Enter user Password'
         value={formData.password}
         onChange={handleChange}
         className='w-full border p-2 mb-3 rounded'
          />
          <br />
          <button type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition'>submit</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  )
}

export default Register