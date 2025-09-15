const express = require("express")
const Products = require("../models/productSchema")
const router = express.Router()
const upload= require("../multer.js")
const verify = require("../verify.js")

//add product
router.post("/add",upload.single("image"),async(req,res)=>{
    try{
        console.log("enter")
        const {name,price,description,image} = req.body
        
        if (!image || !image.startsWith('http')) {
      return res.status(400).json({ message: "Invalid image URL" });
    }

           console.log("enter product")
         const product = new Products({
            name,price,description,image
         })
         console.log("product created")
    const newProduct = await product.save()
    
    res.status(201).json(newProduct,"Product added")
    console.log("Product added", newProduct)
    }
    catch(err){
        console.log(" product addederror")
        res.status(400).json("product added error")
    }
   
})
//get product
router.get("/",verify,async(req,res)=>{
    const product =await Products.find()
    res.status(201).json(product,"get all products")
    console.log("Get all products",product)
})
//get product from id
router.get("/:id",async(req,res)=>{
    const product = await Products.findById(req.params.id)
    res.status(201).json(product,"Get product from id")
    console.log("get product from id",product)
})
//update product
router.put("/:id",async(req,res)=>{
    const product = await Products.findByIdAndUpdate(req.params.id,req.body ,{new:true})
    res.status(201).json(product,"product updaated")
    console.log("products updated",product)
})
//delete product
router.delete("/:id",async(req,res)=>{
    const product = await Products.findByIdAndDelete(req.params.id)
    res.status(201).json(product,"product deleted")
    console.log("product deleted",product)
})
module.exports = router