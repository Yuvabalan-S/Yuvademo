import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { addtocart } from '../assets/redux/cartSlice'; 
import { fetchProducts,deleteproduct } from '../assets/redux/productSlice';
import handleBuyNow from './HandleBuyNow';

function Product() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

 
  const productslist = useSelector((state) => state.product.productslist);
  console.log(productslist);

const[search,setSearch] =useState('')

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  

  const handleDelete = (id) => {
    dispatch(deleteproduct(id));
  };

  

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
    navigate('/addtocart');
  };

  const filteredproducts = productslist.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
   
    <div className='p-6'>
      <h1 className='font-bold text-2xl mb-4'>Product List</h1>

      <div className="w-full flex justify-center mb-6">
        <input
          type='text'
          placeholder='Search '
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-1/2 border p-2 rounded shadow-sm '
        />
      </div>

      

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full'>
        {filteredproducts && filteredproducts.length > 0 ? (
          filteredproducts.map((p) => (
            <div key={p._id} className='border rounded-2xl p-4 shadow-md bg-white'>
              <img src={p.image} alt={p.name} 
               className='w-full h-60 object-cover rounded-md mb-2'/>
              <p><span className='font-sm text-gray-500'>ID:</span> {p._id}</p>
              <p><span className='font-semibold'>Name:</span> {p.name}</p>
              <p><span className='text-gray-700'>Price:</span> ₹{p.price}</p>
              <p><span className='text-gray-700'>Description:</span> {p.description}</p>



              <div className='flex gap-2 mt-3'>
                <button
                  onClick={() => handleDelete(p._id)}
                  className='bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition'
                >
                  Delete
                </button>

                <button
                  onClick={() => handleBuyNow(p ,navigate,user)}
                  className='bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition'
                >
                  Buy Now
                </button>

                <button
                  onClick={() => handleAddToCart(p)}
                  className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 col-span-3'>No products found</p>
        )}
      </div>

      
    </div>
  );
}

export default Product;
