//synchronous 
console.log("Task 1: Start");
console.log("Task 2: Middle");
console.log("Task 3: End");

//Asynchronous
console.log("Task 1: Start");

setTimeout(() => {
  console.log("Task 2: Middle (after 2 seconds)");
}, 2000);

console.log("Task 3: End");