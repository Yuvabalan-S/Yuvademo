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
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">

  <div className="w-full max-w-md bg-gradient-to-b from-white via-gray-50 to-gray-100 
      p-8 rounded-2xl shadow-2xl border border-gray-200">
    
    <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
      Add Product
    </h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Enter Product Name"
        value={newProduct.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
      />
      <input
        type="text"
        name="price"
        placeholder="Enter Product Price"
        value={newProduct.price}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
      />
      <input
        type="text"
        name="description"
        placeholder="Enter Product Description"
        value={newProduct.description}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
      />
      <input
        type="text"
        name="image"
        placeholder="Enter Image URL"
        value={newProduct.image}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
      />

      {newProduct.image && (
        <div className="mt-4 text-center">
          <p className="mb-2 font-semibold text-gray-700">Image Preview:</p>
          <img
            src={newProduct.image}
            alt="preview"
            className="mx-auto max-h-screen rounded-md"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md shadow-md transition"
      >
        Add Product
      </button>
    </form>
  </div>
</div>
  )}

export default AddProduct