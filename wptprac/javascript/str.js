var res;

cngString=()=>{
   // str=prompt("Enter NAME");
    var sel=document.getElementById("oprn").value;
    var str=document.getElementById("str").value;
    console.log(str);

    switch(sel){
        case "upper":
            res=str.toUpperCase();



            break;
        case "lower":
            res=str.toLowerCase();
             break;
        case "concat": 
        var con=prompt("Enter a String to concat");
        res=str.concat(con);
        break;
        case "split": 
        var ch =prompt("Enter Delimiter");
        str.split(ch);
        console.log( str.split(ch));
      
        
        break;
        case "search":
            pattern=prompt("Enter pattern");
                      res="Position:   "+str.search(pattern);  
             break;
        case "match":
            pattern=prompt("Enter pattern");
            res="Position:   "+str.match(pattern);  
             break;
    }
document.getElementById("mydiv").innerHTML= "String :" +res;
 
    
}