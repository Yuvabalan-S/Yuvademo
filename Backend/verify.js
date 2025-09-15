const express = require("express")
const jwt = require("jsonwebtoken")
const secretkey = "123456"

const verify = (req,res,next)=>{
      const authHeader = req.headers["authorization"] || ""
      if(!authHeader){
            return res.status(401).json("token missing")
      }
      const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader
      if(!token){
            return res.status(401).json("token missing")
      }
      try{
            const verified  = jwt.verify(token,secretkey)
            req.user = verified
            next()
      }
      catch(error){
            return res.status(401).json("invalid token")
      }
}
module.exports= verify