//Different types of function defionation
// 1. Define by expression:

let k= function fun(a,c)
{
    console.log("Mult =",a*c)
}
k(10,5)

// 2. Anonymous Function: [Without function name]

let s= function ()
{
    console.log("this is anonymous example")
}
s()

// 3. Arrow function: [=>] Fat arrow
// need not write function keyword.
// need not write function name
// just use fat arrow [=>]

// Simple way to use arrow function
let n= ()=>
{
    console.log("This is arrow function")
}
n()

// For single line arrow function can be written as

let b= ()=> console.log("This is arrow function for single line")

b()

// For multiple line arrow function can be written as

let c= (m,d)=>
{
  return m*d
}
let f=c(4,5)
console.log(f)