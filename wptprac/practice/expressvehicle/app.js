const express=require('express')
const app=express();
const bodyparser =require('body-parser')
const routes=require('./router/router')
const cors =require('cors')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))
app.use("/",routes)
app.listen(3002,()=>{
    console.log("server Started at 3002")
})
module.exports=app;