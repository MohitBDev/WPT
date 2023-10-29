const mysqlcon=require("mysql2")
const conn=mysqlcon.createConnection({
    'host':"127.0.0.1",
    'user':'root',
    'password':'admin@123',
    'database':'test',
    port:3306

})
conn.connect((err)=>{
    if(err){
        console.log("err ocucured"+JSON.stringify(err))
        console.log("connection  not Succesfull")

    }else{
        console.log("connection  Succesfull")

    }

})
module.exports=conn;