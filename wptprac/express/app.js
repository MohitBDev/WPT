//import libraries
const express=require("express");
//create express constructor
const app= express();
const bp=require("body-parser");
//configure middleware
app.use(bp.urlencoded({extended:false}))
app.use((req,resp,next)=>{
    console.log("midlewarev1")
    next();

})
app.use((req,resp,next)=>{
    console.log("midlewarev2")
next();

})

//configure fucns
app.get("/home",(req,resp)=>{
    resp.send("<h1> HOME</h1>")
})
app.get("/aboutus",(req,resp)=>{
    resp.send("<h1> ABOUT US</h1>")
})
app.listen(3002,()=>{
    console.log("Server Started")
}) 