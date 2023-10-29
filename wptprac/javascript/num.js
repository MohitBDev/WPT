
validate = (numid, errmsg) => {
    let a = document.getElementById(numid).value;
    if (a === "" || isNaN(a)) {
        document.getElementById(errmsg).innerHTML = " * Enter valid Number";
        return false;
    }
    else {
        return true;
    }


}
validateNumbers = () => {
    flag = validate("num1", "n1");
    flag1 = validate("num2", "n2");
    if (flag && flag1) {
        alert("data is valid");

    }
    else {
        alert("data is invalid");
    }
}



addnumbers = () => {
    validateNumbers();

    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var sum = a + b;
    document.getElementById("mydiv").innerHTML = "Sum :" + sum;
    console.log(sum);



}
calculater = (ev) => {

    let a = parseInt(document.getElementById("num1").value);
    console.log(a);
    let b = parseInt(document.getElementById("num2").value);
    console.log(b);
    let optn = document.getElementsByName("calc");
    
   /*  for(var i=0;i<optn.length;i++){
        if(optn[i].click){
            var data=optn[i].value;
            console.log(data);
        }

    } */
    
    
    

    
   
    console.log(ev.target.value);
    switch (ev.target.value) {
        case "add":
            document.getElementById("mydiv").innerHTML = "SUM :" + (a + b);
            break;
            case "sub":
                document.getElementById("mydiv").innerHTML = "SUB :" + (a - b);
                break;
                case "mul":
                    document.getElementById("mydiv").innerHTML = "MUL:" + (a * b);
                    break;
                    case "div":
                        document.getElementById("mydiv").innerHTML = "DIV  :" + (a / b);
                        break;

    }







} 