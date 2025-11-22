// Q4 – DevOps Delay: Async Timeout Race
// Two servers respond at different times. We track both completion and the fastest one.

// Utility function to simulate server response
function simulateServerResponse(serverName, delay) {
  return new Promise((resolve, reject) => {
    const failed = Math.random() < 0.25; // 25% chance of failure

    setTimeout(() => {
      if (failed) {
        reject(`${serverName} FAILED during deployment!`);
      } else {
        resolve(`${serverName} deployment completed`);
      }
    }, delay);
  });
}

// Server A → 2 seconds
const serverA = simulateServerResponse("Server A", 2000);

// Server B → 3 seconds
const serverB = simulateServerResponse("Server B", 3000);

// 1️⃣ Promise.all → Wait for both servers
Promise.all([serverA, serverB])
  .then((results) => {
    console.log("✔ Deployment completed for all servers");
    console.table(results);
  })
  .catch((error) => {
    console.error("❌ Deployment halted:", error);
  });

// 2️⃣ Promise.race → Fastest server response
Promise.race([serverA, serverB])
  .then((fastest) => {
    console.log("⚡ Fastest response:", fastest);
  })
  .catch((error) => {
    console.error("❌ Fastest-response check failed:", error);
  });
