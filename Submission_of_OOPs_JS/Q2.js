const menu = { pizza: 200, burger: 120, fries: 80, coke: 40 };
function calculateBill(items) {
  try {
    const prices = items.map((i) => {
      if (!(i in menu)) throw new Error("Item not found: " + i);
      return menu[i];
    });
    const total = prices.reduce((s, p) => s + p, 0);
    console.log("Your total bill:", total);
  } catch (e) {
    console.log("Order Error:", e.message);
  }
}
calculateBill(["pizza", "burger", "fries"]);
calculateBill(["pizza", "pasta"]);
