const express = require("express")
const cors = require("cors")
const db = require("./db")
const userRoutes = require("./routes/userRoutes.js")
const productRoutes = require("./routes/productRoutes.js")
const orderRoutes = require("./routes/ordersRoutes.js")
const cartRoutes = require("./routes/cartRoutes.js")



const app =express()

app.use(express.json())
app.use(cors())
app.use(express.static("./images"))

app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/order",orderRoutes)
app.use("/api/cart",cartRoutes)

app.listen(5005,()=>{
    console.log("server is listening at port 5005")
})