import React, { } from 'react'
import {BrowserRouter,Routes,Route  }from "react-router-dom" 
import Navbar  from './components/Navbar'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Products from "./pages/Products"
import Order from "./pages/Order"
import Logout from "./pages/Logout"
import Addtocart from './pages/Addtocart'
import AddProduct from './pages/AddProduct'
import AuthRoutes from './pages/AuthRoutes'
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector((state)=>state.user.user)
  return (
    <div>
      <>
      
      { user && <Navbar />}
        <Routes>
            <Route path ="/login" element ={<Login/>}/>
               <Route path= "/register" element={<Register/>} ></Route>
            
              
                <>
                <Route path="/" element={<Home />}></Route>
               
                <Route path = "/profile" element = {<AuthRoutes><Profile/></AuthRoutes>}/>
            <Route path = "/addtocart" element={<AuthRoutes><Addtocart/></AuthRoutes>}/>
             <Route path = "/products" element ={<AuthRoutes><Products/></AuthRoutes>}/>
             <Route path = "/addproduct" element ={<AuthRoutes><AddProduct/></AuthRoutes>}/>
             <Route path = "/order" element = {<AuthRoutes><Order/></AuthRoutes>}/>
           <Route path = "/logout" element = {<Logout/>}/>     
                </>
          
              
      </ Routes>
      </>
      
    </div>
  )
}
export default App