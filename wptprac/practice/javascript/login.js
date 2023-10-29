$(document).ready(function(){

    $('#btn').click(function(){

        const name=$('#nm').val();
        const password=$('#pass').val();
        if(name.length>6 ||name==''){
            $('#error').html("Enter Valid User Name ")
        }
        else{
            if(password.length>6 ||password==''){
                $('#error').html("Enter Valid Password")
            }
        }
        
        console.log(name)
       


    })
   
})