const express = require("express")
const jwt = require("jsonwebtoken")
const secretkey = "123456"

const verify = (req,res,next)=>{
      const authHeader = req.headers["authorization"]
   const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader
      if(!token)
            return res.status(401).json("token misssing")
      console.log("token missing")
      try{
            const verified  = jwt.verify(token,secretkey)
            req.user = verified
            console.log("token verified")
            next()
      }
      catch(error){
            console.log("invalid token")
            res.status(401).json("invalid token")
      }
}
module.exports= verify