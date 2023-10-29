const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const routes=require('./router/routers')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use("/",routes)
app.listen(3002,()=>{
    console.log("server Started")
})
module.exports=app;