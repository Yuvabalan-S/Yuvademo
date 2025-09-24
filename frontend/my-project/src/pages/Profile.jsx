import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {logout} from  "../assets/redux/userSlice.js"
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state=>state.user.user))
  if(!user)
    return <div>please log in  </div>

  return (
   <div className="relative min-h-screen w-full">
  
  <div className="absolute inset-0 bg-[url('https://th.bing.com/th?id=ORMS.29f95c570c99f367910fd3340f01800d&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0')] bg-cover bg-center "></div>

  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

  <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl w-full max-w-sm shadow-2xl">

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src={user.avatar || "https://i.pravatar.cc/100"}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-6 space-y-2 text-center">
        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        {user.phone && <p className="text-gray-600">{user.phone}</p>}
        {user.address && <p className="text-gray-600">{user.address}</p>}
      </div>

      <div className="space-y-3 mb-6">
        <button
          onClick={() => navigate('/order')}
          className="w-full text-left bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-xl font-medium transition"
        >
          My Orders
        </button>
        
        <button
          onClick={() => navigate('/products')}
          className="w-full text-left bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-xl font-medium transition"
        >
          Products
        </button>
      </div>

      <button
        onClick={() => {
          dispatch(logout());
          navigate('/login');
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </div>
  </div>
</div>
  )}
      
export default Profile