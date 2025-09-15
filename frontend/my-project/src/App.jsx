import React, { } from 'react'
import {BrowserRouter,Routes,Route  }from "react-router-dom" 
import Navbar  from './components/Navbar'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Products from "./pages/Products"
import Order from "./pages/Order"
import Cart from "./pages/Cart"
import Addtocart from './pages/Addtocart'
import AddProduct from './pages/AddProduct'


function App() {
  return (
    <div>
      <>
      
         <Navbar/>
        <Routes>
           <Route path="/" element={<Home />}></Route>
               <Route path= "/register" element={<Register/>} ></Route>
            <Route path ="/login" element ={<Login/>}/>
            <Route path = "/profile" element = {<Profile/>}/>
            <Route path = "/addtocart" element={<Addtocart/>}/>
             <Route path = "/products" element ={<Products/>}/>
             <Route path = "/addproduct" element ={<AddProduct/>}/>
             <Route path = "/order" element = {<Order/>}/>
           <Route path = "/cart" element = {<Cart/>}/>       
      </ Routes>
      </>
      
    </div>
  )
}
export default App