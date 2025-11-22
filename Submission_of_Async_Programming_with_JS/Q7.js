// Q7 – The Lazy Loader: Promise Combinator Practice

function loadProfile() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3; // 30% chance of rejection
    setTimeout(() => {
      fail ? reject("Profile FAILED") : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      fail ? reject("Posts FAILED") : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => {
      fail ? reject("Messages FAILED") : resolve("Messages Loaded");
    }, 1000);
  });
}

// Measure total time taken
const startTime = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then(
  (results) => {
    console.log("=== Dashboard Modules Status ===");

    results.forEach((result, index) => {
      const moduleName = ["Profile", "Posts", "Messages"][index];

      if (result.status === "fulfilled") {
        console.log(`${moduleName}: SUCCESS → ${result.value}`);
      } else {
        console.log(`${moduleName}: FAILURE → ${result.reason}`);
      }
    });

    const endTime = Date.now();
    console.log(`Total time taken: ${(endTime - startTime) / 1000} seconds`);
  }
);
