const fs=require("fs")
fs.exists("test.txt",function(flag){
    console.log(flag);
    if(flag){
        fs.stat("test.txt",function(err,status){
           if(err){
            console.log("error")

           }
           else{
            //console.log(status)
            fs.open("test.txt","r",function(err,fd){
             if(err){
                console.log("error")

             }
             else{
                var bff=Buffer(status.size);
                fs.read(fd,bff,0,50,null,function(err,bytesread,buffer){
                    console.log(buffer.toString())

                })
             }

            })
        

           }



        })
       
            


      



            
    }else{
        console.log("not Exists")
    }
})

fs.exists("rushi.txt",function(flag){
    if(flag){
        fs.stat("rushi.txt",function(err,status){
           if(err){
            console.log("error occured")
           }
           else{
             console.log(status)
           }

        })

    }else{
        console.log("not Exists")
    }
})