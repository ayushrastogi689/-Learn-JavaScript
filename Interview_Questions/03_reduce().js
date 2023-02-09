// Q What is reduce() ?
// Ans

const nums = [1,2,3,4,5,6]; 

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
