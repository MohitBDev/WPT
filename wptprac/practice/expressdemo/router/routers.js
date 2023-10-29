const express=require('express')
const router=express.Router();
const contn=require('../db/dbconnect')

router.get("/employees",(req,resp)=>{
    contn.query("select * from emp",(err,data)=>{
        if(err){
            resp.status(500).send("Error Occured"+JSON.stringify(err))
        }
        else{
         //resp.send(data)
            resp.render("index",{empdata:data})
        }
    })
})
router.get("/employees/employee/:eid",(req,resp)=>{
    contn.query("select * from emp where emid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Occured"+JSON.stringify(err))
        }
        else{
            resp.send(data[0])
        }
    })
})
router.post("/employees/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename
    var sal=req.body.sal
    contn.query("insert into emp values(?,?,?)",[empid,ename,sal],(err,data)=>{
        if(err){
            resp.status(500).send("Error Occured"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0)
            resp.send("{'mesg':'Succeful Inserted'}")
            else
            resp.send("{'mesg':'UNSucceful Insertion'}")
        }
    })
})
router.put("/employees/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename
    var sal=req.body.sal
    contn.query("update emp set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Occured"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0)
            resp.send("{'mesg':'Succeful updated'}")
            else
            resp.send("{'mesg':'UNSucceful updated'}")
        }
    })
})
router.delete("/employees/employee/:eid",(req,resp)=>{
    
    contn.query("delete from emp where empid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Error Occured"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0)
            resp.send("{'mesg':'Succeful deleted'}")
            else
            resp.send("{'mesg':'UNSucceful deleted'}")
        }
    })
})
module.exports=router;