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
    <div >
    <div className=" p-6 max-w-sm bg-gray-300 text-white rounded-lg shadow-md border border-gray-200 mt-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">User Profile</h1>
      <div className="mb-8">
      <p className="text-gray-700 mb-2">
        <b className="font-semibold">Name:</b>{user.name}</p><br />
      <p className="text-gray-700">
        <b className="font-semibold">Email:</b>{user.email}</p><br />
      </div>
      <div className="flex gap-4">
      <button type='submit'
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      onClick={()=>{
        dispatch(logout())
        
        navigate("/login")
        
      }}>logout</button>
      <br />
      
      <button type='product'
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      onClick={()=>{
        navigate("/products")
      }}>produt</button>
    </div>
    </div>
    </div>
  )
}
export default Profile