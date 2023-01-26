// let and const declarations are also hoisted in JavaScript

// 1.
console.log(a);
var a = 10;
// var a is presend in global space holding a special type of placeholder called "undefined"



// 2.
console.log(b);
let b = 20;

// let is hoisted in Temporal dead zone inside Script


// 3.
console.log(c);
const c = 30;

// const is hoisted in Temporal dead zone inside Script