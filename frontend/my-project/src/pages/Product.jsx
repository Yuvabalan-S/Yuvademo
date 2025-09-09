import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../assets/redux/productSlice'
import {useDispatch, useSelector} from "react-redux"
function Product() {
  const dispatch = useDispatch()
  const productslist = useSelector((state) =>state.product.productslist )
  console.log(productslist)
  
  useEffect(()=>{
    console.log("produdct")
dispatch(fetchProducts())
  },[dispatch])

  
  return (
    <div>
      <h1 className='font-bold'>product list</h1>
      <div>
        <ul>
          {productslist && productslist.length>0 ?(
            productslist.map((p)=>(
              <li key ={p._id}>
                <strong>ID:</strong>{p._id}
                <br />
                <strong>Name:</strong>{p.name}|
                <br />
                <strong>price</strong>{p.price}|
                <br />
                 <strong>description</strong>{p.description}
                 <br />
                 <hr />
              </li>
            ))
          ):(
             <li> no products found</li>
              )}
        </ul>
      </div>
     { /*addproduct*/}
      <div>
        <h1>Add product</h1>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder='Enter Product Name'
          value={newproduct} />
        </form>
      </div>
    </div>
  )
}

export default Product