// Q1 code
class Product {constructor(id,name,price,category){this.id=id;this.name=name;this.price=price;this.category=category;}applyDiscount(p){this.price-=this.price*p/100;}getDetails(){return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;}}
const products=[new Product(1,"Laptop",55000,"Electronics"),new Product(2,"Shoes",1200,"Fashion"),new Product(3,"Mouse",500,"Electronics")];
products[0].applyDiscount(10);
console.log(products.filter(p=>p.price>1000).map(p=>p.getDetails()));
