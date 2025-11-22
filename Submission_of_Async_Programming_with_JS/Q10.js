// Q10 – Async Food Delivery Pipeline
// Each step runs asynchronously with a random 1–2 second delay
// Each step may randomly fail, simulating real-world unpredictability

// Utility function to simulate each delivery step
function simulateStep(stepMessage) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds
    const failed = Math.random() < 0.25; // 25% chance of failure

    setTimeout(() => {
      if (failed) {
        reject(`${stepMessage} FAILED`);
      } else {
        resolve(stepMessage);
      }
    }, delay);
  });
}

// Delivery Step Functions
function takeOrder() {
  return simulateStep("Step 1: Order taken");
}

function prepare() {
  return simulateStep("Step 2: Food prepared");
}

function pack() {
  return simulateStep("Step 3: Package ready");
}

function dispatch() {
  return simulateStep("Step 4: Out for delivery");
}

function deliver() {
  return simulateStep("Delivery completed!");
}

// Main async pipeline controller
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // Await ensures each step completes before moving to the next
    const order = await takeOrder();
    console.log(order);

    const prepared = await prepare();
    console.log(prepared);

    const packaged = await pack();
    console.log(packaged);

    const dispatched = await dispatch();
    console.log(dispatched);

    const delivered = await deliver();
    console.log(delivered);

    console.log("Pipeline finished successfully!");
  } catch (error) {
    console.error("Pipeline failed!");
    console.error("Reason:", error);
  }
}

// Run the delivery flow
runPipeline();

/*
----------------------------------------------
🔍 ASYNC / EVENT LOOP EXPLANATION
----------------------------------------------

1. runPipeline() is marked async, so:
   - It always returns a Promise.
   - You can use 'await' inside it.

2. Each delivery step returns a Promise that resolves
   after a random delay (1–2 seconds) OR rejects.

3. 'await' pauses execution inside runPipeline()
   until each Promise settles.

4. Meanwhile, the Event Loop continues running other tasks
   because async functions do NOT block the thread.

Example:
- await takeOrder()
  → JS registers the Promise resolution in the microtask queue
  → event loop continues doing other tasks
  → when resolved, execution jumps back into runPipeline()

5. try/catch properly handles any rejection:
   - If one step fails, the rest are skipped.
   - Control jumps directly to catch(), printing "Pipeline failed!".

This simulates a real-world async process where every stage
depends on the previous one completing successfully.
----------------------------------------------
*/
