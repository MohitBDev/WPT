increment=()=>{
   if(typeof(Storage)!==undefined){
      if(localStorage.count===undefined )
      {
         localStorage.setItem("count","0")
       //  localStorage.count=1;


      }
      else{
         c=parseInt(localStorage.count)
         localStorage.count=c+1;
      }
   }
document.getElementById("id").innerHTML="Count"+localStorage.count
}
decrement=()=>{
   if(localStorage.count===undefined || localStorage.count=="0")
      {
         localStorage.setItem("count","0")
       //  localStorage.count=1;
 

      }
      else{
         c=parseInt(localStorage.count)
         localStorage.count=c-1;
      }
      document.getElementById("id").innerHTML="Count"+localStorage.count
    
}
reset=()=>{
   localStorage.removeItem("count");
   document.getElementById("id").innerHTML="Count"+0
    
    
}