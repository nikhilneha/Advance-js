// Currying:- We can seperate argument list in individual function and call it together.


let car={
    name:"BMW",
    price:8000000,
    colour:"White",
    arr:["nikhil",null,undefined,true]
}
function Currying(obj)
{
    return function(key)
    {
        return obj[key]         // here I have taken parameter so thats why taken [] bracket.
    }
}
let detail=Currying(car)("arr")
console.log(detail)

// Example 2.

function fun(a)
{
    return function(b)
    {
        return a-b
    }
}
let output=fun(10)(6)            // here (10) is the value of a...and (6) is thr value of b
console.log(output)


// Example 3.

function fun1(c)
{
  return function(d)
  {
    let sum=1
    for(let i=1;i<=c;i++)
    {
         sum=sum*i
    }
    return c=sum*d
  }
}
let res=fun1(5)(1)
console.log(res)