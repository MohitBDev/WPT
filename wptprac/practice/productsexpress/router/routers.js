const express=require('express')
const router=express.Router();
const  conn=require('../db/dbconnect')

router.get("/products",(req,resp)=>{
    conn.query("select * from product",(err,data)=>{
        if(err){
            resp.status(500).send("Error Ocuured in query"+JSON.stringify(err))

        }else{
            resp.send(data)
        }
    })
})
router.get("/products/product/:pid",(req,resp)=>{
    conn.query("select * from product where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Ocuured in query"+JSON.stringify(err))

        }else{
            resp.send(data[0])
        }
    })
})
router.post("/products/product/:pid",(req,resp)=>{
    var pid =req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    conn.query("insert into product  values(?,?,?)",[pid,pname,price],(err,data)=>{
        if(err){
            resp.status(500).send("Error Ocuured in query"+JSON.stringify(err))

        }else{
            if(data.affectedRows>0)
            resp.send("{'msg':'Inserted Succesful'}")
            else
            resp.send("{'msg':' Not Inserted Succesful'}")
        }
    })
})
router.put("/products/product/:pid",(req,resp)=>{
    var pid =req.body.pid;
    var pname=req.body.pname;
    var price=req.body.price;
    conn.query("update product set pname=?,price=? where pid=?",[pname,price,pid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Ocuured in query"+JSON.stringify(err))

        }else{
            if(data.affectedRows>0)
            resp.send("{'msg':'Updated Succesful'}")
            else
            resp.send("{'msg':' Not Updated Succesful'}")
        }
    })
})
router.delete("/products/product/:pid",(req,resp)=>{
    
    conn.query("delete from product where pid =?",[req.params.pid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Ocuured in query"+JSON.stringify(err))

        }else{
            if(data.affectedRows>0)
            resp.send("{'msg':'Deleted Succesful'}")
            else
            resp.send("{'msg':' Not Deleted Succesful'}")
        }
    })
})




module.exports=router;
