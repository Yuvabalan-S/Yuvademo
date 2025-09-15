import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import productReducer from "./productSlice.js"
import orderReducer from "./orderSlice.js"
import cartReducer from "./cartSlice.js"

const store = configureStore({
    reducer:{
        user:userReducer,
        product:productReducer,
        order:orderReducer,
        cart:cartReducer
    }
})
export default store