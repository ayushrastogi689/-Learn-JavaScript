// Case 1:
let score1 = 33;

console.log(typeof score1); // OP : number

// Case 2: 

let score2 = "33";
// Here type of is treated as a method 
console.log(typeof(score2)); // OP: string

// converting a variable value in a number
let valueInNumber = Number(score2);

console.log(typeof score2);  // OP: number

// Case 3:

let score3 = "33abc";

let valueInNumber3 = Number(score3);

console.log(typeof score2);  // OP: NaN - Not a number
