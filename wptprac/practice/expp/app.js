const exp=require('express');
const app=exp();
const bp=require('body-parser');
app.use(bp.urlencoded({extended:false}))
app.use((req,resp,next)=>{
    console.log("middleware 1");
    next()

})
app.get("/",(req,resp)=>{
    resp.send("<h7>Hello</h7>")
})
app.get("/login",(req,resp)=>{
    resp.send("<h7>Login</h7>")
})
app.get("/home",(req,resp)=>{
    resp.send("<h7>Home</h7>")
})
app.get("/aboutus",(req,resp)=>{
    resp.send("<h7>Aboutus</h7>")
})
app.get("/end",(req,resp)=>{
    resp.send("<h7>Logout</h7>")
})



app.listen(3002,()=>{console.log("Server Started at 3002")})

