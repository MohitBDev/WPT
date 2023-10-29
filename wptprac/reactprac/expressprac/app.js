const express=require('express')
const app=express()
const bp=require("body-parser")
const routes=require("./router/routers")

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

/*app.get("/employees",(req,resp)=>{
    resp.send("test")
})*/
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/",routes)

app.listen(3002,()=>{
    console.log('server Started at 3002')
})
module.exports=app;