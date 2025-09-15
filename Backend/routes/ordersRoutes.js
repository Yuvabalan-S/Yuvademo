const express = require("express")
const Orders = require("../models/orderSchema")
const jwt =require("jsonwebtoken")
const secretkey = "123456"
const verify = require("../verify")


const router = express.Router()

//verify token
router.get("/verify-token", verify, (req, res) => {
    res.status(200).json({ valid: true })
    console.log("token verify")
})


//order post
router.post("/",verify,async(req,res)=>{
      try{
            const { products, total, status } = req.body
            if(!Array.isArray(products) || products.length === 0){
                  return res.status(400).json({message:"products are required"})
            }
            const order = new Orders({
                  userId: req.user.id,
                  products,
                  total,
                  status
            })
            const newOrder = await order.save()
            console.log("order success",newOrder)
            return res.status(201).json({ message: "Order placed successfully", order: newOrder })
      }catch(error){
            console.error("order create error", error)
            return res.status(500).json({message:"Internal Server Error"})
      }
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