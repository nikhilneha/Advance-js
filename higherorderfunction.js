// Higher Order Function
// When a functiuon return another function then it is called as  higher order function.

function fun()
{ 
    return function(){
        console.log("Enjoying the advance javascript practice")
        console.log("Hello welcome to learn higher order function")
    }
}
let result=fun()
  result()

 // or
 
function high()
{
    console.log("hello this is main function")
    return function(){console.log("hello welcome to understand new higher order")}
} 
high()()

// or

function order(a,b)
{
    console.log("addition of a and b:-",a+b)
    return function()
    {
        console.log("Mult of a and b:-",a*b)
        console.log("Sub of a and b:-",b-a)
    }
}
order(5,6)()