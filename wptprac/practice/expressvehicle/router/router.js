const express=require('express')
const router=express.Router();
const conn=require('../db/dbconnect')

router.get("/vehicles",(req,resp)=>{
   conn.query("select * from vehicle",(err,data)=>{
    if(err)
    resp.status(500).send("errror ocuuren in query"+JSON.stringify(err))
    else
    resp.send(data)

   })

})
router.get("/vehicles/vehicle/:vid",(req,resp)=>{
    conn.query("select * from vehicle where vid=?",[req.params.vid],(err,data)=>{
     if(err)
     resp.status(500).send("errror ocuuren in query"+JSON.stringify(err))
     else
     resp.send(data[0])
 
    })
 
 })
 router.post("/vehicles/vehicle/:vid",(req,resp)=>{
    var vid=req.body.vid;
    var vname =req.body.vname;
    var price=req.body.price;
    conn.query("insert into vehicle values(?,?,?)",[vid,vname,price],(err,data)=>{
     if(err)
     resp.status(500).send("errror ocuuren in query"+JSON.stringify(err))
     else{
        if(data.affectedRows>0){
            resp.send("{'mesg':' Inserted Succesful'}")

        }
        else{
            resp.send("{'mesg':'  Not Inserted Succesful'}")
        }
     }
     
 
    })
 
 })
 router.put("/vehicles/vehicle/:vid",(req,resp)=>{
    var vid=req.body.vid;
    var vname =req.body.vname;
    var price=req.body.price;
    conn.query("update vehicle set vname=?,price=? where vid=?",[vname,price,vid],(err,data)=>{
     if(err)
     resp.status(500).send("errror ocuuren in query"+JSON.stringify(err))
     else{
        if(data.affectedRows>0){
            resp.send("{'mesg':' Updated Succesful'}")

        }
        else{
            resp.send("{'mesg':'  Not Updated Succesful'}")
        }
     }
     
 
    })
 
 })
 router.delete("/vehicles/vehicle/:vid",(req,resp)=>{
  
    conn.query("delete from vehicle where vid=?",[req.params.vid],(err,data)=>{
     if(err)
     resp.status(500).send("errror ocuuren in query"+JSON.stringify(err))
     else{
        if(data.affectedRows>0){
            resp.send("{'mesg':' Deleted Succesful'}")

        }
        else{
            resp.send("{'mesg':'  Not Deleted Succesful'}")
        }
     }
     
 
    })
 
 })


module.exports=router;