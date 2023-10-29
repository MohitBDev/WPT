
$(document).ready(function(){
    $("#mydiv,p").hover(function(){
        $(this).css({"border":"2px solid red","background-color":"cyan", "font-size":"25px","color":"black","width":"10%","box-shadow":"10px 8px 8px :black ","text-shadow":"3px 2px 2px :red"})

      },function(){
        $(this).css({"background-color":"blue", "font-size":"20px","color":"black","width":'10%'})

    })

    $("#sub").click(function(){
        arr=[]
        
       var un= $("#uname").val();
       
       var pa= $("#pass").val();
       var c=$("#city").val();
        var d=$("input[name=deg]:checked").val();
         $("input[name=cor]:checked").each(function(index,element){
            arr.push($(element).val());

         })
        
         str=`Name :${un} <br> Password : ${pa} <br> City : ${c} <br> Degree : ${d} <br> Course : ${arr} <br>`
         $("#mydiv").html(str);






    })









})
