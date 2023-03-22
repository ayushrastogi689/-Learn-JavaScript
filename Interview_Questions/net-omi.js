const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const implementGroup = (inventory) => {
  if(inventory.type == "vegetables")
  {
    inventory.map((items)=>{
      inventory = push.inventory.items
    })
  }
  return inventory;
}

console.log(implementGroup(inventory));














// Ques 1
let isLoopRunning = true

setTimeout(() => isLoopRunning = false, 2000)

while(isLoopRunning) {
 console.log('loop is running')
}



//Ques 2 What is the output
console.log("Start")
setTimeout(() => console.log('timeout'), 0)
console.log(Promise.resolve(5))
console.log("End")



// Ques 3
const object1 = {x: 1, y: { z: 2}}
const object2 = {...object1}

object2.x = 10;
object2.y.z = 20;

console.log(object1, object2)


// Ques 4
console.log(11 == '11')
console.log(11 === '11')
