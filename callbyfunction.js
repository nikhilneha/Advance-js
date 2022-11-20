// Call by function is categorised into two types
// 1.Call by value             2.Call by reference

// 1. call by value:-

function fun(a)                    // When we pass primitive variable as param value then it is called as
{                                  // call by value.
    console.log(a)                 // i.e string,number,boolean,undefined,null,bigInt,symbol
}                                  // Define by the expression
let a=45
fun(a)

// or

let b= function(c)
{                                  // Define by the anonymous [without function name]
    console.log(c)
}
b(65)

// or

let d= (e)=>
{                                // define by the arrow function
    console.log(e)
}
d(78)
// 2. Call by reference:-

function call(p)                 // when we pass non primitive variable as a param value then it is called as
{                                // call by reference.
    console.log(p)               // i.e array and object
}                                // define by the expression
let p=[23,65,74]
call(p)

// or

let f= function(g)                     // define by thr anonymous function.
{
    console.log(g)
}
let h=["nikhil","sumit","swapnil"]
f(h)

// or

let i= (j)=>
{
    console.log(j)
}
let k=[23,"hello",undefined,null]
i(k)