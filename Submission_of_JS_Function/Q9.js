// Q9: ES6 Classes version of Person → Student

class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const stud = new Student("Ayush", "CSE");
stud.showName();
stud.showBranch();

/*
Both ES6 class version and prototype version behave the same internally.
Classes are just cleaner syntax over prototype-based inheritance.
*/
