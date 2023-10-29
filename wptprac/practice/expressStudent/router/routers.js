const express=require('express')
const router=express.Router();
const conn=require('../db/dbconnect')

router.get("/students",(req,resp)=>{
    conn.query("select * from student",(err,data)=>{
        if(err){
               resp.status(500).send("erro in data"+JSON.stringify(err))
        }
        else{
            resp.send(data)

        }

    })
})
router.get("/students/student/:id",(req,resp)=>{
    conn.query("select * from student where studid=?",[req.params.id],(err,data)=>{
        if(err){
               resp.status(500).send("erro in data"+JSON.stringify(err))
        }
        else{
            resp.send(data[0])

        }

    })
})

router.post("/students/student/:id",(req,resp)=>{
    var studid=req.body.studid;
    var Sname=req.body.Sname;
    var Course=req.body.Course;
    conn.query("insert into student values(?,?,?)",[studid,Sname,Course],(err,data)=>{
        if(err){
               resp.status(500).send("erro in data"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'inserted Succesful'}")
            }
            else{
                resp.send("{'mesg':'inserted NotSuccesful'}")
            }

        }

    })
})

router.put("/students/student/:id",(req,resp)=>{
    var studid=parseInt(req.body.studid);
    var Sname=req.body.Sname;
    var Course=req.body.Course;
    conn.query("update student set sname=?,course=? where studid=?",[Sname,Course,studid],(err,data)=>{
        if(err){
               resp.status(500).send("erro in data"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'updated Succesful'}")
            }
            else{
                resp.send("{'mesg':'updated NotSuccesful'}")
            }

        }

    })
})

router.delete("/students/student/:id",(req,resp)=>{
    conn.query("delete from student  where studid=?",[req.params.id],(err,data)=>{
        if(err){
               resp.status(500).send("erro in data"+JSON.stringify(err))
        }
        else{
            if(data.affectedRows>0){
                resp.send("{'mesg':'deleted Succesful'}")
            }
            else{
                resp.send("{'mesg':'deleted NotSuccesful'}")
            }

        }

    })
})












module.exports=router;
