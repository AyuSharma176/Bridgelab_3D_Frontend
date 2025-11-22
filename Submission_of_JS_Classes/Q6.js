// Q6 code placeholder
// Q6: Employee Management System

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Ayush", "IT", 30000),
    new Employee(2, "Rohan", "HR", 25000),
    new Employee(3, "Maya", "Finance", 40000),
    new Employee(4, "Kunal", "IT", 35000),
    new Employee(5, "Sara", "Admin", 28000)
];

employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

const totalPayout = employees.reduce(
    (sum, emp) => sum + emp.getAnnualSalary(),
    0
);

console.log("Total Annual Payout:", totalPayout);
