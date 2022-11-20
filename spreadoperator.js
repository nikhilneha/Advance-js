// Spread Operator:- We can used to split the values in array.
  
function welcome(r,s,t,u)
{
    console.log(r)
    console.log(s)
    console.log(t)
    console.log(u)
}
let v=["Nikhil","BE",30,"Bankar"]
  welcome(...v)

  // Or

 
function hello(a,b,c,d)
{
   console.log("Adiition",a+b)
   console.log("Sub",b-c)
   console.log("mult",c*d)
   console.log("div",d/a)
}
let m=[44,23,65,54]
hello(...m) 

// Or

let e= function(f,g,h,i)
{
    console.log(f)
    console.log(g)
    console.log(h)
    console.log(i)
}
let k=[10,null,true,undefined]
e(...k)