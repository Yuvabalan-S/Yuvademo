import { createSlice } from "@reduxjs/toolkit";
//import { react } from "react";
//import axios from "axios";


const orderSlice = createSlice({
    name:"order",
    initialState:{
        orderList:[]
    },
    reducers:{
        setOrders :(state,action)=>{
          state.orderList = action.payload
        },
        addOrders :(state,action)=>{
            state.orderList.push(action.payload)
        },
        deleteOrders :(state,action)=>{
            state.orderList=state.orderList.filter(
                (order) =>order._id !== action.payload
            )
        }
    }
    
})
export const {setOrders ,addOrders ,deleteOrders} = orderSlice.actions
export default orderSlice.reducer