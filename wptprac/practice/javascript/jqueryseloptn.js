$(document).ready(function(){
    $('#btn').click(sel=()=>{
       var val=$('select option:selected').val()
       console.log(val)
       $('#id').html(val)

    })
})