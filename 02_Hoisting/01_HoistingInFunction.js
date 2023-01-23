// Hoisting in JS function

getName();

function getName(){
    console.log("I Am Ayush");
}

// Here we are trying to access the function get name even before we have initialized it.
// the function gets hoisted in JavaScript and we the output: I am Ayush      insted of getting any error