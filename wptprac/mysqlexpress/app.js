//import libraries
const express =require("express");
const app =express();
const bp=require("body-parser")
const path=require("path")
const routes=require("./router/routers")
app.use(bp.urlencoded({extended:false}))

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.set(express.static,(path.join(__dirname,"public")))
app.set("/css",express.static,(path.resolve(__dirname,"public/css")))
app.set("/js",express.static,(path.resolve(__dirname,"public/js")))
app.set("/img",express.static,(path.resolve(__dirname,"public/img")))
app.use("/",routes)
app.listen(3002,()=>{
    console.log("server Started at 3002")
})

module.export=app;
