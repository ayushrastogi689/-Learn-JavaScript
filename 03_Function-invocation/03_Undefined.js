// Undefined vs Not Defined

console.log(a); 
// Before initialization of a, a is only declared. JS engine has allocated the memory to a: undefined
var a = 7;

// Once the initialization has occured the values of a gets updated to 7.

var b;
console.log(b);
// Here value of b remains undefined through-out the program.