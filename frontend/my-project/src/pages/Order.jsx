import React, { useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {deleteOrders, setOrders } from "../assets/redux/orderSlice"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Order() {

  const orderList = useSelector((state)=>(state.order.orderList))
  console.log(orderList)
const dispatch = useDispatch()
  const navigate = useNavigate()

    
  useEffect(()=>{
   const fetchOrders =async()=>{
          try{
            console.log("enter odred")
            const res =  await axios.get("http://localhost:5005/api/order")
            dispatch(setOrders(res.data))
            console.log("get orders")
            
          }
          catch(err){
            console.log(err)
          }
   }
   fetchOrders()
  },[dispatch])

  const handledelete= async(id)=>{
    try{
      const res = await axios.delete(`http://localhost:5005/api/order/${id}`)
      dispatch(deleteOrders(id))
      return res.data.id
    }
    catch{
      console.log(" deleting error")
    }
  }
  return (
   <div
      className="relative min-h-screen flex flex-col text-gray-800 
      bg-[url('https://www.bing.com/th/id/OIP.Azl2bl0E1f2sbT73l9s6PwHaFD?w=240&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')] 
      bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col min-h-screen p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 border-b-4 border-blue-500 pb-3">
          📦 My Orders
        </h1>

        {orderList && orderList.length > 0 ? (
          <div className="grid gap-6">
            {orderList.map((o) => (
              <div
                key={o._id}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition transform flex flex-col md:flex-row justify-between gap-6"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex justify-between items-center mb-2">
                    
                  </div>

                  {o.products && o.products.length > 0 ? (
                    o.products.map((p, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-gray-200 py-1">
                        <div>
                          <span className="font-semibold text-gray-800">{p.productId.name}</span>
                          <span className="text-sm text-gray-500 ml-2">x{p.quantity}</span>
                        </div>
                        <span className="text-gray-900 font-semibold">
                          ₹{p.productId.price * p.quantity}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No products in this order</p>
                  )}

                  <div className="mt-3 text-gray-700 font-bold text-lg">
                    Total: <span className="text-blue-700">₹{o.total}</span>
                  </div>
                  <div className="mt-3 text-gray-700 font-bold text-lg">
                    Status: <span className='text-yellow-600'>{o.status}</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2 md:w-48">
                  {o.products && o.products.length > 0 ? (
                    o.products.map((p, index) => (
                      <img
                        key={index}
                        src={p.productId.image}
                        alt={p.productId.name}
                        className="w-24 h-24 object-cover rounded-md border border-gray-300"
                      />
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No images</p>
                  )}
                </div>

                <div className="mt-4 md:mt-0 md:flex md:items-end">
                  <button
                    onClick={() => handledelete(o._id)}
                    className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition shadow-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12 py-12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="No Orders"
              className="w-32 h-32 mb-6 opacity-80"
            />
            <p className="text-xl font-semibold text-gray-700 mb-2">
              No Orders Found
            </p>
            <p className="text-white-500 bg-white mb-6 text-center">
              Looks like you haven’t placed any orders yet.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
              text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 
              transition font-semibold shadow-lg"
            >
              🛍️ Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order
