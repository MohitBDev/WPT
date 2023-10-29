const exp=require("express")
const app=exp();
const bp=require("body-parser")
const routes=require("./router/router")
const cors=require('cors');
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true

}))

app.use("/",routes)
app.listen(3001,()=>{
    console.log("server Started at 3001")
})
module.exports=app;