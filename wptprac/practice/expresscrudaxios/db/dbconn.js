const mysql=require('mysql2')
var conn=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"admin@123",
    "database":"advjava2",
    "port":3306
})
conn.connect((err)=>{
    if(err){
console.log("errr ocuured"+JSON.stringify(err))
    }else{
console.log("connnect created")
    }
})
module.exports=conn;