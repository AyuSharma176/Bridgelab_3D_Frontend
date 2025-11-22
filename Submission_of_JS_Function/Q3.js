// Q3: object with arrow function method

const user = {
  name: "Ayush",
  showName: () => {
    console.log(this.name);
  },
};

user.showName();
/*
Reason:
Arrow functions do NOT have their own 'this'.
They take 'this' from the surrounding (global) scope.
So this.name is undefined.
*/

// FIX using normal function
const userFixed = {
  name: "Ayush",
  showName() {
    console.log(this.name);
  },
};

userFixed.showName();
