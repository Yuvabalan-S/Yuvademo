const express = require("express")
const Orders = require("../models/orderSchema")
const jwt =require("jsonwebtoken")
const secretkey = "123456"
const verify = require("../verify")


const router = express.Router()

//order post
router.post("/",async(req,res)=>{
      //const {products,total} = req.body
      const order = new Orders(req.body
      )
      const newOrder = await order.save()
      res.status(201).json(newOrder,"order success")
      console.log("order success",newOrder)
})
//order get
router.get("/",async(req,res)=>{
      const order =  await Orders.find()
          console.log("get orders",order)
          res.status(201).json(order,"Get all orders")   
})

//order get by user id
router.get("/:userId",async(req,res)=>{
      try{
            const order = await Orders.find({
            userId:req.params.userId
      })
     res.json(order)
     console.log("get order by id",order)
      }
      catch(err){
            console.log("get order error") 
      }
})
router.delete("/:orderId",async(req,res)=>{
      try{
            const order =  await Orders.findByIdAndDelete(req.params.orderId)
            res.status(201).json(order,"order Cancelled")
            console.log("order cancelled",order)
      }
      catch(err){
            console.log("delete error")
            res.status(401).json("delete error")
      }
})
module.exports = router