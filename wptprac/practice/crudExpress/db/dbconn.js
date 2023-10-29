const mysql=require("mysql2")
var conn=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"admin@123",
    "database":"prac",
    "port":3306
})
conn.connect((err)=>{
    if(err){
        console.log("Error in Connection"+JSON.stringify(err))

    }else{
        console.log("Connection Succesful")
    }
})
module.exports=conn;