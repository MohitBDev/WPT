const exp=require('express')
const app=exp();
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
//add MIDDLEware
app.use((req,resp,next)=>{
    console.log("MIDDLE ware 1")
       next()
})
app.use((req,resp,next)=>{
    console.log("MIDDLE ware 2")
    next()
})
// add URL HANDLERs
app.get("/",(req,resp)=>{
   resp.send("<h2>Start</h2>")
})
app.get("/home",(req,resp)=>{
    resp.send("<h2>Home</h2>")
})
app.get("/aboutus",(req,resp)=>{
    resp.send("<h2>ABOUTUS</h2>")
})
app.listen(3001,()=>{
    console.log("server Started at 3001")
})