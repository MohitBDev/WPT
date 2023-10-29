CngString=()=>{
    var str=document.getElementById("str").value
    console.log(str)
   var sel= document.getElementById("sel").value
   console.log(sel)

   switch(sel){
    case "upper":
          result=str.toUpperCase();
    break;
    case "serach":
       pattern= prompt("Enter pattern to serach")
        result=str.search(pattern)
        break;
    case "replace":
        pattern= prompt("Enter pattern to replace")
        pattern2= prompt("Enter pattern to replace with")
        result=str.replace(pattern,pattern2)
        break;
    case "split":
        pattern= prompt("Enter split  with pattern")
       result= str.split(pattern)
       console.log(str.split(pattern))
        break;
        case "includes":
            pattern= prompt("Enter pattern to include")
       
       result= str.includes(pattern);
        break;


   }
document.getElementById("id").innerHTML=result;
}