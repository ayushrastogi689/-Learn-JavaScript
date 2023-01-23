// Function invocation and Variable environment

var x = 1;
a();
b();


function a(){
    var x = 10;
    console.log(x);    
}


function b(){
    var x = 20;
    console.log(x);    
}