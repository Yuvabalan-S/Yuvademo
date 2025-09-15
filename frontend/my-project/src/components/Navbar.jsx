import React from 'react'
import {Link} from "react-router-dom"

import { FaHome,FaShoppingCart } from 'react-icons/fa';
function Navbar() {
  return (
        <nav className='bg-blue-600 p-4 w-full flex justify-between  gap-5  shadow-md'>
          <div className='text-white text-2xl font-bold'>
            <Link to ="/">Logo</Link>
          </div>
          <ul className='flex gap-6  text-white justify-center items-center  font-medium'>
            <li>
              <Link to= "/" className='flex items-center justify-center hover:text-yellow-300 transition'><FaHome/></Link>
            </li>
            <Link to ="/register" className='hover:text-yellow-300 transition'>Register</Link>
            <li>
              <Link to ="/login" className='hover:text-yellow-300 transition'>Login</Link>
            </li>
            <li>
              <Link to ="/profile" className='hover:text-yellow-300 transition'>Profile</Link>
            </li>
            <li>
              <Link to ="/addtocart" className='hover:text-yellow-300 transition'>Addtocart</Link>
            </li>
            <li>
              <Link to ="/products" className='hover:text-yellow-300 transition'>Products</Link>
            </li>
            <li><Link to ="addproduct" className='hover:text-yellow-300 transition'>AddProduct</Link>
            </li>
            <li><Link to ="/order" className='hover:text-yellow-300 transition'>Order</Link>
            </li>
            <li>
             <Link to ="/cart" className='flex items-center justify-center hover:text-yellow-300 transition'><FaShoppingCart/></Link>
            </li>
          </ul>
        </nav>
  )
}
{/*
  div>
        <div>
            <Link to= "/">Home</Link>
            <Link to ="/register">Register</Link>
            <Link to ="/login">Login</Link>
            <Link to ="/profile">Profile</Link>
            <Link to ="/products">Product</Link>
            <Link to ="/order">Order</Link>
            <Link to ="/cart">Cart</Link>
            </div>        
    </div>
  */}
export default Navbar