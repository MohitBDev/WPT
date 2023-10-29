const mysql=require("mysql2")
var sqlconn=mysql.createConnection({

    host:'127.0.0.1',
    user:'root',
    password:'admin@123',
    database:'dac',
    port:3306
});
sqlconn.connect((err)=>{
    if(err){
        console.log("error in Connection"+JSON.stringify(err));
    }
    else{
        console.log("Succesfull Conncetion")
    }

})
module.exports=sqlconn;