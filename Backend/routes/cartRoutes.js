const express = require('express')
const addToCart =require('../models/cartSchema')
const router = express.Router()

router.post("/add",async(req,res)=>{
     try{
    const{ userId,productId,quantity} = req.body
    const cart = await addToCart.findOne({userId})

    if(cart){
        const itemIndex = cart.products.findIndex( p=> p.productId === productId)
        if(itemIndex > 1){
            cart.products[itemIndex].quantity += quantity
        }
        else{
            cart.products.push({productId,quantity})
        }
        cart = await cart.save()
        res.status(200).json("cart updated",cart)
}else{
    const newCart = new addToCart({
        userId,
        products:[{
            productId,
            quantity
        }]
    })
    const savedCart = await newCart.save()
    res.status(200).json({message:"cart created",cart:savedCart})
    console.log('cart created')
}
}catch(err){
    console.log("error")
    res.status(400).json("eror")
}
})

router.get('/:user',async(req,res)=>{
    const cart = await addToCart.find()
    res.status(200).json({message:"get cart items",cart:cart})
    console.log("get cart items",cart)
})

router.get('/:userid',async(req,res)=>{
    const cart = await addToCart.findById(req.params.userid)
    res.status(200).json({message:"get cart items by id",cart:cart})
    console.log("get items cart by id",cart)
})

router.delete("/:cartId",async(req,res)=>{
    try{
            const cart =  await addToCart.findByIdAndDelete(req.params.cartId)
            res.status(201).json(cart,"order Cancelled")
            console.log("order cancelled",cart)
      }
      catch(err){
            console.log("delete error")
            res.status(200).json("delete error")
      }
})


module.exports = router