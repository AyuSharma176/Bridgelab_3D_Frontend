const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 15 },
  { id: 3, name: "Mobile", category: "Electronics", price: 15000, stock: 2 },
  { id: 4, name: "Watch", category: "Fashion", price: 1500, stock: 10 },
];
function getLowStockProducts() {
  return products.filter((p) => p.stock < 5);
}
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}
function calculateTotalInventoryValue() {
  return products.reduce((s, i) => s + i.price * i.stock, 0);
}
function groupByCategory() {
  return products.reduce((g, i) => {
    if (!g[i.category]) g[i.category] = [];
    g[i.category].push(i);
    return g;
  }, {});
}
console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
