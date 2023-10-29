const fs =require("fs")


fs.readFile("test.txt",function(err,data){
    if(err){

console.log("error Ocuured ",err);
    }
    else{
        console.log(data.toString());
    }

})



fs.readFile("rushi.txt",function(err,data){
    if(err){

console.log("error Ocuured ",err);
    }
    else{
        console.log(data.toString());
    }

})

