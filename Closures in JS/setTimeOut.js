// Q1 What is set Time-out ? 
// Ans Set time out stores the function in a different place and attaches a timer to it. When the timer is finished, it rejoins the call stack and executed. 

// Case 1: Variable declaration with "var" 
function x() {
  var a = 10;
  setTimeout(function() {
  console.log(a);
  }, 3000);

console.log("JavaScript");

x();

// Case 2: Variable declaration with "let"


