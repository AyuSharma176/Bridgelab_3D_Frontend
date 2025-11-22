// Q4: Car constructor with prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Honda", "City");
const car2 = new Car("Maruti", "Swift");

car1.getDetails();
car2.getDetails();
