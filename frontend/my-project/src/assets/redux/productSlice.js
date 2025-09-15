import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const token = localStorage.getItem("token")

  const res = await axios.get("http://localhost:5005/api/product",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data
})


export const addproduct = createAsyncThunk("products/add",async (productData) => {
    try {
      const token = localStorage.getItem("token")
      const res = await axios.post( "http://localhost:5005/api/product/add",productData,
        {
            headers: { Authorization: `Bearer ${token}`,}
        }
      )
      return res.data
    } catch (err) {
      console.log(err,"add product failed")
      return ( "Failed to add product")
    }
  }
)

export const deleteproduct = createAsyncThunk("products/delete", async (id) => {
    try {
      console.log(id, "deleted")
      const token = localStorage.getItem("token")
      const res = await axios.delete(`http://localhost:5005/api/product/${id}`,
      { headers: { Authorization: `Bearer ${token}` } })
      return res.data.id
    } catch (err) {
      console.log("failed to deleted")
      return (err, "Failed delete product")
      
    }
  }
)

const productSlice = createSlice({
    name:"product",
    initialState:{
        productslist:[],
    },
    reducers:{},
        
        
        extraReducers:(builder)=>{
          builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productslist = action.payload
        })
    
            builder.addCase(addproduct.fulfilled,(state,action)=>{
                state.productslist.push(action.payload)
            })
            builder.addCase(deleteproduct.fulfilled,(state,action)=>{
                state.productslist = state.productslist.filter(
                    (product)=>product._id !==action.payload
                )
            })
}}

)
export default productSlice.reducer

