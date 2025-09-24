import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../assets/redux/userSlice'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const user = useSelector((state)=>state.user.user)
const dispatch = useDispatch()
const navigate = useNavigate()
  const handleLogout =()=>{
    dispatch(logout())
    //return
    navigate("/login")
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4
                bg-[url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1350&q=80')]
                bg-cover bg-center relative">
  
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

  <div className="relative z-10 w-full max-w-md p-8 
                  bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl text-center">
    
    <div className="flex justify-center mb-6">
      <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <img
          src={user.avatar || "https://i.pravatar.cc/100"}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {user ? (
      <>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Welcome <span className="text-blue-600">{user.name}</span>!
        </h2>
        <p className="text-gray-700 mb-6">You're currently logged in.</p>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <h2 className="text-2xl text-gray-800 font-semibold mb-2">No user is logged in.</h2>
        <p className="text-gray-600 text-sm mt-2">Please login to continue.</p>
      </>
    )}
  </div>
</div>
  )}
    
export default Logout
