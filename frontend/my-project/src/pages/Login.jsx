import React, { useState } from 'react'
import axios from "axios"
import {login} from "../assets/redux/userSlice.js"
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'

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
   const token = res.data.token;
      localStorage.setItem('token', token);
      const response = await axios.get('http://localhost:5005/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });  console.log(token)
  dispatch(login(response.data))
    console.log("logged in user")
  
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
  <div className="min-h-screen flex items-center justify-center px-4
                    bg-gradient-to-br from-indigo-400 via-blue-400 to-pink-400">

      <div className="w-full max-w-md p-10 
                      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                      rounded-3xl shadow-2xl text-white">
        
        <div className="flex justify-center -mt-16 mb-6">
          <div className="w-20 h-20 rounded-full shadow-lg overflow-hidden border-4 border-white">
            <img
              src="https://www.bing.com/th/id/OIP.07ueYhOxoSaMJwa4II31sgHaHa?w=187&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Login to your E-Commerce Account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-105 transition transform duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-105 transition transform duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-700">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-indigo-600 hover:underline cursor-pointer font-medium"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login