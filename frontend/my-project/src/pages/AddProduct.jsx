import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addproduct } from '../assets/redux/productSlice';

function AddProduct() {
const [newProduct,setNewProduct] =useState({
    name: '',
    price: '',
    description: '',
    image:'',
})
const dispatch = useDispatch()

    const handleChange = (e) => {
      const {name,value} = e.target
      setNewProduct(prev=>({...prev,[name]:value}))
    }
     
    
      const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(addproduct(newProduct))
        setNewProduct({
          name: '',
          price: '',
          description: '',
          image:'',
        })
      }
  return (
    <div>
      <div className='mt-10 max-w-md mx-auto bg-gray-200 p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Add Product</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='name'
            placeholder='Enter Product Name'
            value={newProduct.name}
            onChange={handleChange}
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='text'
            name='price'
            placeholder='Enter Product Price'
            value={newProduct.price}
            onChange={handleChange}
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='text'
            name='description'
            placeholder='Enter Product Description'
            value={newProduct.description}
            onChange={handleChange}
            className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input type="text"
          name='image'
          placeholder='enter image url'
          onChange={handleChange}
          className='w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          {newProduct.image && (
            <div>
            <p>Image :</p>
            <img src={newProduct.image}
            alt='preview' />
            </div>
          )}
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition'
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct