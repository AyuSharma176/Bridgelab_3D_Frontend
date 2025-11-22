// Q5 – Callback Hell Example

function delay(taskName, callback) {
  setTimeout(() => {
    console.log(taskName);
    callback();
  }, 1000);
}

// Callback hell pipeline
function startPipeline() {
  delay("Designing UI...", () => {
    delay("Building UI...", () => {
      delay("Testing UI...", () => {
        delay("Deploying UI...", () => {
          delay("Celebration Time 🎉", () => {
            console.log("Pipeline finished (Callback Hell).");
          });
        });
      });
    });
  });
}

startPipeline();
