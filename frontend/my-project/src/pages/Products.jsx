import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { addtocart,  } from '../assets/redux/cartSlice'; 
import { fetchProducts,deleteproduct } from '../assets/redux/productSlice';
import handleBuyNow from './HandleBuyNow';
import AuthRoutes from "./AuthRoutes"

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
    console.log(product)
  };

  const filteredproducts = productslist.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div
      className="relative min-h-screen flex flex-col text-gray-800 
      bg-[url('https://www.bing.com/th/id/OIP.bYcsGshNggGldxceA-GJUQHaEJ?w=244&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black-10 backdrop-blur-[2px]"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="p-6 bg-white/80 backdrop-blur-sm min-h-screen rounded-xl shadow-md">
          <h1 className="font-bold text-3xl mb-8 text-blue-800 text-center">
            Explore Products
          </h1>

          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 border border-gray-300 p-3 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredproducts && filteredproducts.length > 0 ? (
              filteredproducts.map((p) => (
                <div
                  key={p._id}
                  className="bg-gray-200 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 relative"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-56 object-contain bg-gray-200 p-2"
                  />

                  <div className="p-4">
                    <h2 className="text-md font-bold text-gray-800">{p.name}</h2>
                    <p className="text-green-600 text-lg font-bold">₹{p.price}</p>
                    <p className="text-xs text-gray-500 mt-1">Free Delivery</p>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {p.description}
                    </p>

                    <div className="flex flex-col gap-2 mt-4">
                      <button
                        onClick={() => handleAddToCart(p)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md text-sm font-medium"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleBuyNow(p, navigate, user)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium"
                      >
                        Buy Now
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-10  rounded-lg shadow-md">
                <div className="w-10 h-10 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-semibold text-gray-600">
                  Fetching Data...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
