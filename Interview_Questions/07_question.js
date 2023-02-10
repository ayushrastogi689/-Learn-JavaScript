// Ques 3
const object1 = {x: 1, y: { z: 2}}
const object2 = {...object1}

object2.x = 10;
object2.y.z = 20;

console.log(object1, object2)
