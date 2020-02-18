function check() {
    var inputVal = document.getElementById("LoginUserName");
    var inputVal1 = document.getElementById("Pword");
    var inputVal2 = document.getElementById("CPword");
    var inputVal3 = document.getElementById("Email");
    
    if (inputVal.value == "") {
        inputVal.style.backgroundColor = "Red";
    }
    else{
        inputVal.style.backgroundColor = "";
    }

    if (inputVal1.value == ""||inputVal1.value!=inputVal2.value) {
        inputVal1.style.backgroundColor = "Red";
    }else if (inputVal1.value==inputVal2.value) {
        inputVal1.style.backgroundColor = "Green";}
    else{
        inputVal1.style.backgroundColor = "";
    }if (inputVal2.value == ""||inputVal1.value!=inputVal2.value) {
        inputVal2.style.backgroundColor = "Red";
    }
    else if (inputVal1.value==inputVal2.value) {
        inputVal2.style.backgroundColor = "Green";
    }
    else{
        inputVal2.style.backgroundColor = "";
    }
    if (inputVal3.value == "") {
        inputVal3.style.backgroundColor = "Red";
    }
    else{
        inputVal3.style.backgroundColor = "";
    }
}