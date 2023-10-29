const mysql=require('mysql2')
//create Connection 
 var mysqlcon=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin@123',
    database:'advjava2',
    port:3306
 });
 mysqlcon.connect((err)=>{
    if(err){
       console.log("Connection Failed" +JSON.stringify(err))
    }
    else{
        console.log("connection succesful")

    }
 })
 module.exports=mysqlcon;