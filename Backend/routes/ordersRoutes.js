const express = require("express")
const Orders = require("../models/orderSchema")
const jwt =require("jsonwebtoken")
const secretkey = "123456"
const verify = require("../verify")


const router = express.Router()

router.get("/verify-token", verify, (req, res) => {
    res.status(200).json({ valid: true })
    console.log("token verify")
})


router.post("/",verify,async(req,res)=>{
      try{
            const { products, total, status } = req.body
            if(!Array.isArray(products) || products.length === 0){
                  console.log("no productas")
                  return res.status(400).json({message:" No products"})
            }

             
            const order = new Orders({
                  userId: req.user.id,
                  products,
                  total,
                  status
            })
            const newOrder = await order.save()
            console.log("order success",newOrder)
            return res.status(200).json({ message: "Order placed successfully", order: newOrder })
      }catch(error){
            console.error("order create error", error)
            return res.status(400).json({message:"Internal Server Error"})
      }
})
router.get("", async (req, res) => {
  try {
    const orders = await Orders.find()
      .populate("products.productId", "name image price")
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});

router.delete("/:orderId",async(req,res)=>{
      try{
            const order =  await Orders.findByIdAndDelete(req.params.orderId)
            res.status(201).json(order,"order Cancelled")
            console.log("order cancelled",order)
      }
      catch(err){
            console.log("delete error")
            res.status(200).json("delete error")
      }
})
module.exports = router