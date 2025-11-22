function getBugs() {
  return new Promise((resolve, reject) => {
    const apiFailed = Math.random() < 0.3; // 30% chance API fails

    setTimeout(() => {
      if (apiFailed) {
        reject("API Error: Failed to fetch bugs!");
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Calling the Promise and handling results
getBugs()
  .then((bugs) => {
    console.log("Bug List Fetched Successfully:");
    console.table(bugs); // neat tabular output
  })
  .catch((error) => {
    console.error("ERROR:", error);
  });
