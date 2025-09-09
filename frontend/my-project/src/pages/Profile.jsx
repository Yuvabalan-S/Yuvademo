import React from 'react'
import {useSelector} from "react-redux"
import {logout} from  "../assets/redux/userSlice.js"
import { useNavigate } from 'react-router'

function Profile() {
  const navigate = useNavigate()

  const user = useSelector((state=>state.user.user))
  if(!user)
    return <div>please log in  </div>

  return (
    <div>
      <h1>User Profile</h1>
      <p><b>Name:</b>{user.name}</p><br />
      <p><b>Email:</b>{user.email}</p><br />
      <button type='submit'
      onClick={()=>{
        logout()
        navigate("/login")
        
      }}>logout</button>
      <br />
      <button type='product'
      onClick={()=>{
        navigate("/products")
      }}>produt</button>
    </div>
  )
}
export default Profile