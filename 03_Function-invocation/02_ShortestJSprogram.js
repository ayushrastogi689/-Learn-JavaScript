// The empty file is called as Shortest JS program.

// even though there is no code to execute... 
// still JS engine is doing a lot of things behind the scenes 

// 1. AS soon as we run this program in google chrome and do a inspect.
// 2. The JS engine creates a global execution context and also sets up the memory space
// 3. JS engine also does something interesting, it creates something called window (a global object) in global space.
// 4. "this" points to the global object i.e. window object

// Q What is global space? 
// Ans Whenever we write any JavaScript code which not inside any block or function then it 
// is called as golbal space. 

// Whenever we create any variable or function inside the global space it gets attached to 
// the window     
// For Ex_1 var a = 10;  -> console.log(window.a); // OP : 10
// Ex_2 var a = 10;  -> console.log(this.a); // OP : 10