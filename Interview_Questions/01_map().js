Q1 What is map() ?
Ans map() is a function 

const nums = [1,2,3,4,5];

const multiplyByThree = nums.map(num, index, arr) => {
  return num * 3;
}

console.log(multiplyByThree);
