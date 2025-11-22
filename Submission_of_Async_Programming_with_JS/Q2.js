// Log start of program
console.log("Start");

// Macrotask → setTimeout
setTimeout(() => {
  console.log("setTimeout callback (Macrotask)");
}, 0);

// Microtask → Promise.then()
Promise.resolve().then(() => {
  console.log("Promise.then callback (Microtask)");
});

// Synchronous code
console.log("Synchronous log");

// End of program
console.log("End");
