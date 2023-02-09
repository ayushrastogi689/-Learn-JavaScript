// Q What is Polyfill in JS? 
// Ans

Array.prototype.myMap = function (callback) {
 let tempArray = [];
  
  for(let i = 0; i < this.length; i++) {
   temp.push(callback(this[i], i, this)); 
  }
  return temp;
}
