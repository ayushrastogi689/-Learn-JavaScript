// Q What is closure?
// Ans A function bundled togeather with its lexical scope is called as closures

function x() {
  var a = 10; 
  function y() {
    console.log(a);
  } 
  return y; 
  
  var z = x() ;
// 100 lines of code 
  z();

//Here the OP will be 10
