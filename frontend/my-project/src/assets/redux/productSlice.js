import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"


export const fetchProducts = createAsyncThunk("produsts/fetch",async()=>{
    const res = await axios.get("http://localhost:5005/api/product")
    return res.data
})

export const addproduct = createAsyncThunk("products/add",async()=>{
    const res = await axios.post("http://localhost:5005/api/product")
    return res.data
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        productslist:[],
    },
    reducers:{
        addproduct:(state,action)=>{
            state.productslist.push(action.payload)
        },
        deleteproduct:(state,action)=>{
            state.productslist=state.productslist.filter(
                (product)=>product.id !==action.payload
            )}
        },
        extraReducers:(builder)=>{
          builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productslist = action.payload
        })
    }}
)
//export const {} = productSlice.actions
export default productSlice.reducer