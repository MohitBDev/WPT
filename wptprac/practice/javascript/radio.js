validateData=()=>{
   var name= document.getElementById("nm").value
   var deg=document.getElementsByName("degree")
   console.log(deg)
   for(var i= 0 ; i<deg.length;i++){
    if(deg[i].checked){
        data = deg[i].value 
    
    } 
 }
   document.getElementById("id").innerHTML="Name :"+name+ "<br>"+"DEGREE :"+data
}