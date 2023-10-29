const exp=require("express");
const router=exp.Router();
const connect=require("../db/dbconn");
router.use((req,resp,next)=>{
    next()
    })

router.get("/emp",(req,resp)=>{
    connect.query("select * from Emp",(err,data)=>{
        if(err){
            resp.status(500).send("Data Not Found "+JSON.stringify(err))

        }else{
            resp.send(JSON.stringify(data))

        }

    })

})
router.get("/emp/:eid",(req,resp)=>{
    connect.query("select * from Emp where id=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Data Not Found "+JSON.stringify(err))

        }else{
            resp.send(data[0])

        }

    })

})
router.post("/emp/add",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var email=req.body.email;
    var salary=req.body.salary;


    connect.query("insert into Emp values(?,?,?,?)",[id,name,email,salary],(err,data)=>{
        if(err){
            resp.status(500).send("Data Not Found "+JSON.stringify(err))

        }else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'Data Added'}");

            }else{
                resp.send("{'mesg':'Data Not Added'}");

            }

        }

    })

})
router.put("/emp/update/:eid",(req,resp)=>{
    var id=req.body.id;
    var name=req.body.name;
    var email=req.body.email;
    var salary=req.body.salary;
    connect.query("update Emp set name=?, email=?, salary=? where id=?",[name,email,salary,id],(err,data)=>{
        if(err){
            resp.status(500).send("Data Not Found "+JSON.stringify(err))

        }else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'Updated'}");

            }else{
                resp.send("{'mesg':'Not Updated'}");

            }


        }

    })

})
router.delete("/emp/delete/:eid",(req,resp)=>{
    connect.query("delete from emp where id=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Data Not Found "+JSON.stringify(err))

        }else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'deleted'}");

            }else{
                resp.send("{'mesg':'Not deleted'}");

            }


        }

    })

})

module.exports=router;