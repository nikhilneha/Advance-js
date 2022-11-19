// When we pass function as a parameter then it is called as call back function
// Advantage of cal back function is [It has control on the function everytime we can change which function
// should be executed}

let a= (y)=>
{
    y()
}
let m=90
a(print)

function print()
{
    console.log("Hi this is print example")
}

// Calculator example for call back function

function Calculator (b,c,work)          // or let d= (b,c,work)=>
{
    work(b,c)
}
Calculator(7,4,mult)

function addition(b,c)
{
    console.log("Addition =",b+c)
}
function sub(b,c)
{
    console.log("Sub =",b-c)
}
function div(b,c)
{
    console.log("Div =",b/c)
}
function mult(b,c)
{
    console.log("Mult =",b*c)
}



// Getdata and showdata example

function getData(x,y,callBack)
{
    console.log("The multiplication of the numbers "+x+" and "+y+" is = "+x*y)
    callBack()
}
function showData()
{
    console.log("This is showdata method execute after the completion ofgetdata method")
}
getData(8,7,showData)