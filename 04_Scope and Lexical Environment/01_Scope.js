// Scope 

function a(){
    console.log(b);  // When JS engine reaches this line, it checks if b is present in the local memory of function a() or not
}

// When JS engine is unable to find b in a() then it will check in the gloabl memory space, and hence finds b.
var b= 10;
a();