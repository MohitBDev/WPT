arr=["kiran","shriyash","mohit"]
displaydetails=()=>{
    str="<ul>"
    for(var name of arr){
        var cnt=0
       str +="<li>"+ arr[cnt]+"</li>";
cnt++;
    }
    str +="</ul>"
    console.log(str)
    document.getElementById("mydiv").innerHTML=str
    
}
addname=()=>{
    val=document.getElementById("name").value;
    arr.push(val)
    document.getElementById("name").value=""
    displaydetails()

}
deletename=()=>{
    val=document.getElementById("name").value;
    arr.pop(val)
    document.getElementById("name").value=""
    displaydetails()

}