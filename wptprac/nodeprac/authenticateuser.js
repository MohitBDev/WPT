arr={"User1":"user1","User2":"user2","User3":"user3","User4":"user4"}
exports.validateuser=(uname,passwd)=>{
    var p=arr[uname]
    if(p===passwd){
        return true;
     } else{
        false;
    }

}
exports.adduser=(uname,passwd)=>{
    var p=arr[uname]
    console.log(p)
    if(p!==undefined){
        return false;
     } else{
        arr[uname]=passwd;
        return true;
    }

}

