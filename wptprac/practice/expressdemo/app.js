const express=require('express')
const app=express()
var path=require("path")
const bodyparser=require('body-parser')
const router=require('./router/routers')
 app.use(bodyparser.urlencoded({extended:false}))
 app.use(bodyparser.json())
 app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
 app.use("/",router)
 app.listen(3002,()=>{
    console.log("Server Started at 3002")
 })

 module.exports=app;