function x() {
  var a = 10;
  setTimeout(function() {
  console.log(a);
  }, 3000);

console.log("JavaScript");

x();

// 1 Set time out stores the function in a different place and attaches a timer to it. When the timer is finished, it rejoins the call stack and executed. 
