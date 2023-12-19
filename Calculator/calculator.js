function addition(){
    var num1= Number(document.getElementById("num1").value)
    console.log(num1)
    var num2= Number(document.getElementById("num2").value)
    console.log(num2)

    var result =num1+num2
    console.log(result)
    document.getElementById("result").value= result
    alert("addition of 2 numbers is: "+result)
}
function subtraction(){
    var num1= Number(document.getElementById("num1").value)
    console.log(num1)
    var num2= Number(document.getElementById("num2").value)
    console.log(num2)

    var result =num1-num2
    console.log(result)
    document.getElementById("result").value= result
    alert("subtraction of 2 numbers is: "+result)
}
function multiplication(){
    var num1= Number(document.getElementById("num1").value)
    console.log(num1)
    var num2= Number(document.getElementById("num2").value)
    console.log(num2)

    var result =num1*num2
    console.log(result)
    document.getElementById("result").value= result
    alert("multiplication of 2 numbers is: "+result)
}
function division(){
    var num1= Number(document.getElementById("num1").value)
    console.log(num1)
    var num2= Number(document.getElementById("num2").value)
    console.log(num2)

    var result =num1/num2
    console.log(result)
    document.getElementById("result").value= result
    alert("division of 2 numbers is: "+result)
}