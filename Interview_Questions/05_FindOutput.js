// Ques 1

let isLoopRunning = true

setTimeout(() => isLoopRunning = false, 2000)

while(isLoopRunning) {
 console.log('loop is running')
}
