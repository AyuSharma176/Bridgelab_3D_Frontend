function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  const newPrice = this.price - (this.price * percent) / 100;
  return newPrice;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Shoes", 2000);
const p3 = new Product("Watch", 1500);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(20));
console.log(p3.name, p3.applyDiscount(15));

// Abstraction: user only calls applyDiscount without knowing internal formula.
