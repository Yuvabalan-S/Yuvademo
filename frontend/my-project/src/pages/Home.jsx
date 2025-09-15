import React from 'react'
import { FaMobileScreen } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import Navbar from '../components/Navbar';


function Home() {
  const laptops = [
    {
      image: 'https://www.bing.com/th/id/OIP.W8x8M6e-ZoD0T-WB62smhgHaHa?w=187&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      description: 'A compelling t-shirt description highlights the products features, benefits, and unique selling points to attract customers and drive sales.',
    },
    {
      image: 'data:image/jpeg;base64,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',
      description: 'The ASUS ROG Zephyrus G14 is a compact and powerful gaming laptop with high-end graphics, fast refresh rate, and sleek design — perfect for gamers and creators on the move.',
    },
    {
      image: 'https://www.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?w=260&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
      description: 'A mobile phone is a portable communication device that allows users to make and receive calls, send messages, and access various digital services, evolving from basic cellular technology to advanced smartphones',
    },
  ];
  
  return (
    <div>
      

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


 

    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

      {laptops.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-6 my-8 `}
        >
          <img
            src={item.image}
            alt="Laptop"
            className="w-full md:w-1/2 rounded shadow-lg"
          />
          <p className="text-lg text-gray-700 md:w-1/2">{item.description}</p>
        </div>
      ))}
      </div>
      </div>
      </div>
  )}


  

 

 
       

  
  


export default Home