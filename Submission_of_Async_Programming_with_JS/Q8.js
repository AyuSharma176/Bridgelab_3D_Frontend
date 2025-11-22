// Q8 – Order Processing Flow: Async Retry Mechanism

// A Promise-based function that succeeds or fails randomly (50% failure).
function submitOrder() {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.5; // 50% failure chance

    setTimeout(() => {
      if (failed) {
        reject("Order submission failed");
      } else {
        resolve("Order submitted successfully");
      }
    }, 1000);
  });
}

// The retry mechanism with up to 3 attempts
async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const message = await submitOrder();
      console.log(`Attempt ${attempt}: Success → ${message}`);
      return; // Stop retrying on success
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed → ${error}`);

      // If it's the last attempt, throw final error
      if (attempt === 3) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

// Running the process with graceful error handling
(async () => {
  try {
    await processOrder();
  } catch (finalError) {
    console.error("❌ FINAL ERROR:", finalError.message);
  }
})();
