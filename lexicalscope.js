// Lexical Scope:-  Javascript uses lexical scoping to resolve the variable names when a function is created inside
//                  another function.It determines the function's parent scope by looking at where the function
//                  was created instead of where it was invoked.
//                  Javascript looks for variables in a way, if it can't find a variable in its local execution
//                  content, it will look for it in its calling context.
//                  And if not found in its calling context, Repeatedly, until it is looking in the global execution
//                  context. And if it does not find then, its undefined. 


let fullName="Nikhil Bankar"
 function profile()
 {
    function sayName()
    {
        function writeName()
        {
            return fullName
        }
        let result=writeName()
        console.log(result)
       
    }
    sayName()
 }
profile()


// Example 2.

let fullName1="Nikhil s. Bankar"
 function profile1()
 {
    let fullName1="Neha Bankar"
    function sayName1()
    {
        let fullName1="Neha N. Bankar"
        function writeName1()                   // Ans. Neha N.Bankar
        {
            return fullName1
        }
        let result1=writeName1()
        console.log(result1)
    }
    sayName1()
 }
 profile1()

 // Example 3


 let a=34
 function fun()
 {
    let b=54
     function fun1()
    {
        let c=65
         function fun2()
        {
            let d=34
            console.log("Addition is::",a+b+c+d)
        }
        fun2()
    }
    fun1()
 }
 fun()