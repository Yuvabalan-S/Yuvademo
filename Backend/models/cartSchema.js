const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"products",
                required:true
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
},
{
    timestamps:true
})
const addToCart = mongoose.model("cart",cartSchema)
module.exports = addToCart