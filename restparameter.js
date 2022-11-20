// Rest Parameter:- Using rest parameter we can collect multiple values in a single variable.
// Rules:- 1.We use simply 3 dots (...)
//         2.Rest parameter must be end of the list of param


let x=function wonder(...p)
{                                               // Define by expression
    console.log(p)
}
x(32,54,67,31,23)

// Or

let d= (...m)=>
{                                                // Define by arrow
    console.log(m)
}
d(43,35,65,78,98)

// Or 

let y= function(...s)
{                                                // Define by anonymous
    console.log(s[3])
}
y(12,54,23,76,88)