const express=require("express")
const router=express.Router();
const connect=require("../db/dbconn")


router.get("/employees",(req,resp)=>{
    connect.query("select * from emp",(err,data)=>{
        if(err){
            resp.status(500).send("Data not Found"+JSON.stringify(err))
        }
        else {
            resp.send(data);
        }
    })
})
router.get("/employees/employee/:eid",(req,resp)=>{
    connect.query("select * from emp where empid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Data not Found"+JSON.stringify(err))
        }
        else {
            resp.send(data);
        }
    })
})

router.post("/employees/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connect.query("insert into emp values(?,?,?)",[empid,ename,sal],(err,data)=>{
        if(err){
            resp.status(500).send("Data not Found"+JSON.stringify(err))
        }
        else {
            if(data.affectedRows>0){
                resp.send("{'mesg':'Employee Inserted'}")

            }else{
                resp.send("{'mesg':'Employee Not Inserted'}")

            }
        }
    })
})

router.put("/employees/employee/:eid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connect.query("update emp set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data)=>{
        if(err){
            resp.status(500).send("Data not Found"+JSON.stringify(err))
        }
        else {
            if(data.affectedRows>0){
                resp.send("{'mesg':'Employee updated'}")

            }else{
                resp.send("{'mesg':'Employee Not updated'}")

            }
        }
    })
})

router.delete("/employees/employee/:eid",(req,resp)=>{
    connect.query("delete from emp where empid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Data not Found"+JSON.stringify(err))
        }
        else {
            if(data.affectedRows>0){
                resp.send("{'mesg':'Employee deleted'}")

            }else{
                resp.send("{'mesg':'Employee Not deleted'}")

            }
        }
    })
})



module.exports=router;