const mongoose = require("mongoose")
const products = require("./productSchema")

const orderSchema = new mongoose.Schema ({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true
            },
            quantity:{
                type:Number,
                default:1
            }
        }

    ],
    total:Number,
    status:{
        type:String,default:"Pending"
    }

    
})
const orders = mongoose.model("order",orderSchema)
module.exports = orders