// Q1: greetUser with callback demonstration

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // calling the callback function
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// Demonstration of callback flow
greetUser("Ayush", showEndMessage);
