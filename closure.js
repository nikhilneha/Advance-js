// Closure:- A function persists(save/store karna) its state(action).
//           Closure provides access to the outer scope of a function from inside the inner function,even after the 
//           outer function has closed.


// Example 1.
function greet()
{
    // variable define outside the inner function
    let name="Nikhil"
    // inner function
   function displayName()
   {
    return "Hi"+" "+name
   }
   return displayName
}
let result=greet()
console.log(result())   // returns the value i.e output= Hi Nikhil
console.log(result)     // returns the function defination...   output=[function: displayName]

// Example 2.

let a;

function Closure()
{
    a=34;
    {
    a+=10
    console.log(a)
}
}
Closure()

console.log("After execution",a)