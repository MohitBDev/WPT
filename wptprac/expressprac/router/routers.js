const express=require('express')
const router=express.Router()
const contn=require("../db/dbconnect")


router.get("/employees",(req,resp)=>{
    //resp.send("test");
     console.log("in get method")
    contn.query("select * from employee",(err,data,fields)=>{
        if(err){
            console.log("Error Ocurred"+JSON.stringify(err))
            resp.status(500).send("error Occured")
        }
        else{
            console.log(data)

            resp.send(data)
        }

    })
    



})
router.get("/employees/employee/:empid",(req,resp)=>{
    //resp.send("test");
     console.log("in get method")
    contn.query("select * from employee where empid=?",[req.params.empid],(err,data,fields)=>{
        if(err){
            console.log("Error Ocurred"+JSON.stringify(err))
            resp.status(500).send("error Occured")
        }
        else{
            console.log(data)
            resp.send(data[0])
        }

    })
    



})


router.post("/employees/employee/:empid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal
    contn.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,data,fields)=>{
        if(err){

            console.log("Error Ocurred"+JSON.stringify(err))
            resp.status(500).send("error Occured")
            resp.send({"msg":"unsuccesfully insertion "})

        }
        else{
            if(data.affectedRows>0)
         resp.send({"msg":"succesfully inserted "})
         else
         resp.status(500).send("NOT Inserted")

        }


    })

})
router.put("/employees/employee/:empid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal
    contn.query("update employee set ename=? ,sal=? where empid=?",[ename,sal,empid],(err,data,fields)=>{
        if(err){

            console.log("Error Ocurred"+JSON.stringify(err))
            resp.status(500).send("error Occured")
            resp.send({"msg":"unsuccesfully updated "})

        }
        else{
            if(data.affectedRows>0)
            resp.send({"msg":"succesfully updated "})
            else
            resp.status(500).send("NOT Updated")

        }


    })

})
router.delete("/employees/employee/:empid",(req,resp)=>{

    contn.query("delete from employee where empid=?",[req.params.empid],(err,data,fields)=>{
        if(err){

            console.log("Error Ocurred"+JSON.stringify(err))
            resp.status(500).send("error Occured")
            resp.send({"msg":"unsuccesfully Deleted "})

        }
        else{
            if(data.affectedRows>0)
            resp.send({"msg":"succesfully Deleted "})
            else
            resp.status(500).send("NOT Deleted")

        }


    })

})







module.exports=router;

