const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const router=require('./router/routers')
const cors=require('cors')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use("/",router)
app.listen(3002,()=>{
    console.log("server Started")

})
module.exports=app;
