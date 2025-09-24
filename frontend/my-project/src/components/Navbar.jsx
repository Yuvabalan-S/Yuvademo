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
            {/*<li>
              <Link to ="/login" className='hover:text-yellow-300 transition'>Login</Link>
            </li>*/}
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
             <Link to ="/logout" className='flex items-center justify-center hover:text-yellow-300 transition'>Logout</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar