arr=[]
function getseatnumber(ev){
   
    if(ev.target.checked){
         //add in the array
        //search the data
        arr.push(ev.target.value)
     
       arr.filter(a=>a==ev.target.value).pop(arr)
     //  console.log( arr.filter(a=>a==ev.target.value).pop(arr))
        console.log(arr)}
    else{
        //delete the data
    }
    document.getElementById("id").innerHTML=arr; 
   console.log(arr)
}