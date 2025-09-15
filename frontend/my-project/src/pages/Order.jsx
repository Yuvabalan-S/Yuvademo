import React, { useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {deleteOrders, setOrders } from "../assets/redux/orderSlice"
import axios from 'axios'

function Order() {

  const orderList = useSelector((state)=>(state.order.orderList))
  console.log(orderList)
const dispatch = useDispatch()
  

    
  useEffect(()=>{
   const fetchOrders =async()=>{
          try{
            console.log("enter odred")
            const res =  await axios.get("http://localhost:5005/api/order")
            dispatch(setOrders(res.data))
            console.log("")
            
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
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-4 text-left text-blue-700">OrderList</h1>
      <div className="w-full sm:w-[350px]">
      <ul  className="space-y-4">
        {orderList && orderList.length>0 ?(
          orderList.map((o)=>(
            <li key={o._id} className="bg-gray-200 shadow-md rounded-lg p-4 border border-gray-200">
              <strong className="font-semibold text-gray-800">orderID:</strong>{o._id}<br/>
              <strong className="font-semibold text-gray-800">order.userId:</strong>{o.userId}<br/>
              <strong className="font-semibold text-gray-800">order.total:</strong>{o.total}<br/>
              <strong className="font-semibold text-gray-800">order.status:</strong>{o.status}<br/>
              <button onClick={()=>handledelete(o._id)} 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >delete order</button>
              
            </li>
          ))
        ):(
          <li className="text-center text-gray-500 mt-10 text-lg">NO Order... Please Place the Order!</li>
        )}
      </ul>
      </div>

      

      
    </div>
  )
}
export default Order