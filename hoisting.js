// Hoisting:-  We can use variable or function before its declaration
//             By default JS engine all variable declaration move to the top of the scope.
//             It move declaration only.

// Variable Hoisting:-
// Var rules:- It hoisted only declaration.
//             When we use before initialization default value will be undefined.

function hoist()
{
    var b;
    {
        var num=30
    }                           // Undefined
    console.log(b);
    b=20
}
hoist()


function hoist1()
{
    var c;
    {
        var num1=30
    }                          // ans:- 65
    c=65
    console.log(c)
}
hoist1()


// function hoist2()
// {
//     console.log(d)
//     {
//         var num2=78
//     }                       // Ans. Error...cannot access "d"before initialization
//     d=43
//     let d;
// }
// hoist2()


function hoist3()
{
    e=78
    console.log(e)              // Ans. 78
    {
        var num3=86
    }
    var e;
}
hoist3()

hoist4()
function hoist4()
{
    f=64
    {
        console.log(f)          // Ans. 64
    }
    var f;
}



// let and cosnt:-    It is hoisted but we cannot use until its declared.

// function hoist5()
// {
//     g=92
//     console.log(g)
//     {
//         num4=65             // Ans. Error....cannot access "g" before initialization.
//     }
//     let g;
// }
// hoist5()


// function hoist6()
// {
//     h=73
//     {
//         console.log(h)       // Ans. Error..... Cannot access "h" before initialization
//     }
//     let h;
// }
// hoist6()


hoist7()
function hoist7()
{
    let i;
    i=51
    {
        console.log(i)             // Ans. 51
    }
}
