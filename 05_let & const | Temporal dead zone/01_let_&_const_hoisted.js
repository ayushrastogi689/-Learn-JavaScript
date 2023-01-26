// let and const declarations are also hoisted in JavaScript

// 1.
console.log(a);
var a = 10;
// var a is presend in global space holding a special type of placeholder called "undefined"



// 2.
console.log(b);
let b = 20;

// let is hoisted in Temporal dead zone inside Script
// If we put a debugger at line 11, Now this line hasn't been executed but variables were hoisted
// "a" was created inside Script and assigned a value of "undefined", but it is not been initialized
// This phase is known as temporal deadzone, untiled line 11 is executed.


// 3.
console.log(c);
const c = 30;

// const is hoisted in Temporal dead zone inside Script