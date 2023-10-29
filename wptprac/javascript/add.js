
$(document).ready(function(){
    


   
   $("#add").click(function(){
    var a=parseInt($("#num1").val());
    var b=parseInt($("#num2").val());
  
    
    $("#mydiv").html("Result :"+(a+b)) 
 })
 $("#sub").click(function(){
    var a=parseInt($("#num1").val());
    var b=parseInt($("#num2").val());

    $("#mydiv").html("Result :"+(a-b)) 
 })
 $("#mul").click(function(){
    var a=parseInt($("#num1").val());
    var b=parseInt($("#num2").val());

    $("#mydiv").html("Result :"+(a * b)) 
 })
 $("#div").click(function(){
    var a=parseInt($("#num1").val());
    var b=parseInt($("#num2").val());
    $("#mydiv").html("Result :"+(a/b)) 
 })
   



})