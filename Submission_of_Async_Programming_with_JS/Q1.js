// Q1 – The Startup Morning: Async Coffee Maker
// Each step is asynchronous and returns a Promise.
// A random failure may happen using Math.random().
// The entire coffee process is executed using Promise chaining.

// Utility function to simulate delay + random failure
function simulateAsyncTask(taskName) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds

    setTimeout(() => {
      const isFailed = Math.random() < 0.2; // 20% chance of failure

      if (isFailed) {
        reject(`${taskName} failed!`);
      } else {
        console.log(`${taskName} completed.`);
        resolve(taskName);
      }
    }, delay);
  });
}

// Step 1: Boiling water
function boilWater() {
  return simulateAsyncTask("Boiling water");
}

// Step 2: Brewing coffee
function brewCoffee() {
  return simulateAsyncTask("Brewing coffee");
}

// Step 3: Pouring into cup
function pourCoffee() {
  return simulateAsyncTask("Pouring coffee into the cup");
}

// Running the entire async process using Promise chaining
boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.error("ERROR:", error);
    console.log("Coffee process stopped. Try again!");
  });
