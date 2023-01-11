// In JavaScript we can declare variables by using keywords - var, let, const

// First variable using var
var number1 = 10;

//Second variable using const
let number2 = 20;

function add(a,b){
    console.log(a+b); 
}

add(number1, number2);


// 1. In Javascript there was an issue in using the var keyword while declaring the variable.
    /* During earlier days there was a problem with Javascript that it doesn't worked on the concept of scope{}
     It doesn't had any control over the Block scope, so when people declared a varible using var 
     and the same varible name came in the file somewhere else which is having a different value then, the value of previously
     declared variable changes
     */

// 2. 