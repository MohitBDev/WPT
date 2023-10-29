const express=require("express")
const router=express.Router();
const contn=require("../db/dbconnects")
router.get("/employess",(req,resp)=>{
    contn.query("select * from emp",(err,data,fields)=>{
        if(err){
            resp.status(500).send("Error in server side"+JSON.stringify(err))
        }
        else{
            console.log(data)
            resp.render("index",{empdata:data})
        }

    })

})
router.get("/empform",(req,resp)=>{
resp.render("empform")

})
router.post("/insertEmployee",(req,resp)=>{
 var empid=req.body.empid;
var ename=req.body.ename;
var sal=req.body.sal;
contn.query("insert into emp(empno,ename,sal) values(?,?,?)",[empid,ename,sal],(err,data,fields)=>{
    if(err){
        resp.status(500).send("Error in server side"+JSON.stringify(err))
    }
    else{

        resp.redirect("/employess")
    }
    

})
})


router.get("/update/:empno",(req,resp)=>{
    console.log("empno ",req.params.empno)
   contn.query("select * from emp where empno=?",[req.params.empno],(err,data,fields)=>{
    console.log(data);
    if(err){
        resp.status(500).send("data not added"+JSON.stringify(err));
    }else{
        resp.render("updateemp",{emp:data[0]});
    }

   })
})

router.post("/updateemployee",(req,resp)=>{
    var empid=req.body.empid;
   var ename=req.body.ename;
   var sal=req.body.sal;
   contn.query("update  emp  set ename=? , sal=? where empno=? ",[ename,sal,empid],(err,data,fields)=>{
       if(err){
           resp.status(500).send("Error in server side"+JSON.stringify(err))
       }
       else{
   
           resp.redirect("/employess")
       }
       
   
   })
   })
   router.get("/delete/:empno",(req,resp)=>{
    console.log("empno ",req.params.empno)
   contn.query("delete from emp where empno=?",[req.params.empno],(err,data,fields)=>{
    console.log(data);
    if(err){
        resp.status(500).send("data not added"+JSON.stringify(err));
    }else{
        resp.redirect("/employess");
    }

   })
})








module.exports=router;