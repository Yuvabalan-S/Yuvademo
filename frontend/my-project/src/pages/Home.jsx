import React, { useState } from 'react'
import { FaMobileScreen } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import Navbar from '../components/Navbar';


function Home() {
  const[showRegister,setShowRegister]= useState(false)
  return (
    <div>
      <Navbar onRegisterClick ={()=>setShowRegister(true)}/>

    <div className='bg-gray-100 min-h-screen'>
    <div className='bg-white shadow p-4 flex justify-around'>
      <div className='flex flex-col items-center hover:text-blue-500 cursor-pointer'>
       < FaMobileScreen  className='text-2xl'/>
        <span>Mobiles</span>
      </div>
      <div  className='flex flex-col items-center hover:text-blue-500 cursor-pointer'>
        <FaTshirt className='text-2xl'/>
        <span className='text-sm'>Tshirt</span>
      </div>
      <div  className='flex flex-col items-center hover:text-blue-500 cursor-pointer'>
        <FaLaptop  className='text-2xl'/>
        <span>Electronics</span>
      </div>
      <div  className='flex flex-col items-center hover:text-blue-500 cursor-pointer'>
      <FaShoppingBag  className='text-2xl'/> 
      <span>Grocery</span>
      </div>
    </div>

    <div className='w-full h-60 bg-blue-300 flex items-center justify-center text-white text-3xl font-bold'>
      Banner/Carousel
    </div>

    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'> Top Offers</h2>
      
    </div>

  {  /* register page */}

       {showRegister&&(
        <div className='fixed right-0 top-0 h-full w-1/3 br-gray-100 p-5 shadow-1g'>
         <h2 className='text-2xl font-bold mb-4'>Register Form</h2>
        <input 
        type="text"
        placeholder='Enter user Name'
        className='w-full border p-2 mb-3 rounded'
         />
         <br />
         <input 
         type="email"
         placeholder='Enter user Email'
         className='w-full border p-2 mb-3 rounded' />
         <br />
         <input 
         type="password"
         placeholder='Enter user Password'
         className='w-full border p-2 mb-3 rounded'
          />
          <br />
          <button type='submit'
          className='w-full bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-700 transition'>submit</button>

          <button onClick={()=>setShowRegister(false)}
            className='text-red-500 mt-3 underline'>close</button>
        </div>
       )}
    </div>
    </div>
  )
}

export default Home