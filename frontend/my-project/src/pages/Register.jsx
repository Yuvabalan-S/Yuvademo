import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"



function Register() {
  const[formData,setFormData]= useState({
  name:"",
  email:"",
  password:""
})

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
            
            console.log("registration sucessful",res)
            setTimeout(()=>{
                navigate("/login")
            },1000)
        }
        catch(err){
            console.log(err.response? err.response.data:err.message)
           
        }
    }


  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-200 via-purple-300 to-pink-200 justify-center px-4 bg-gray-100 ">
  <div className="w-full max-w-md bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl p-10">
    <h2 className="text-3xl font-extrabold text-center text-white mb-8">
      Create Account
    </h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-white/20 placeholder-white text-white transition duration-200 hover:scale-105"
          required
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-white/20 placeholder-white text-white transition duration-200 hover:scale-105"
          required
        />
      </div>

      <div>
        <label className="block text-white font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-white/20 placeholder-white text-white transition duration-200 hover:scale-105"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white/90 text-blue-600 py-3 rounded-xl font-semibold text-lg hover:bg-white transition duration-200 shadow-md hover:shadow-lg"
      >
        Register
      </button>
    </form>

    <p className="mt-8 text-center text-white text-sm">
      Already have an account?{' '}
      <span
        onClick={() => navigate('/login')}
        className="text-white font-medium cursor-pointer hover:underline"
      >
        Login here
      </span>
    </p>
  </div>
</div>
  )}
export default Register