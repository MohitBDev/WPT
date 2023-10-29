
$(document).ready(function(){

$('#btn').click(fun=()=>{
    var num1=parseInt($('#n1').val())
    var num2=parseInt($('#n1').val())
    var ans=num1+num2;
    console.log(ans)
    $('#result').val(ans)
    $('#mydiv').html(ans);
    

})
})