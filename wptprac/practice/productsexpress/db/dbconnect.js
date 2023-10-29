const mysql=require('mysql2')
const conn=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"admin@123",
    "database":"advjava2",
    "port":3306
})
conn.connect((err)=>{
    if(err)
    {
        console.log("Error in database"+JSON.stringify(err))

    }
    else{

 console.log("connection Succesful")
    }

})
module.exports=conn;