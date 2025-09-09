const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")
const verify = require("../verify")


const router = express.Router()

const secretKey = "123456"

router.post("/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const user = await User.findOne({email})
        if(user)
            return res.status(400).json(" user already exists")

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({name,email,password:hashedPassword})
        const register = await newUser.save()
        res.status(201).json(register,"User Registered Successfully")
        console.log("user Registered Successfully",register)
    }
    catch(error){
        console.log("Registered error")
        res.json("registered error")
    }
})
router.post("/login",async(req,res)=>{
    try{
    const {email,password}= req.body
    const user = await User.findOne({email})
    if(!user)
        return res.status(400).json("User not Found")
    console.log("user not found")

    const valid = await bcrypt.compare(password,user.password)
    if(!valid)
        return res.status(400).json("invalid password")
    console.log("invalid password")

    const token = jwt.sign({id:user._id},secretKey)
            console.log("user logged in")
    res.json({token,user:
        {
        id:user._id,
        name:user.name,
        email:user.name,
        }
    })
}
catch(error){
    console.log("login error")
    res.status(400).json("login error")
}
})

router.get("/profile",verify,async(req,res)=>{
    const user =await User.findById(req.user.id).select("-password")
    res.status(201).json(user,"profile created")
    console.log("profile created",user)
})
module.exports = router