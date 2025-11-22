class Employee {
  constructor(n, d) {
    this.name = n;
    this.department = d;
  }
  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}
class Manager extends Employee {
  work() {
    console.log(`${this.name} manages the ${this.department} team`);
  }
}
new Employee("Rohan", "IT").work();
new Manager("Ayush", "Sales").work();
