// Q9 code placeholder
// Q9: Shopping Cart Total

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        const couponRegex = /^(SAVE|DISC)(\d{2})$/;

        const match = code.match(couponRegex);
        if (!match) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        const discount = Number(match[2]);
        const total = this.getTotal();
        const finalTotal = total - (total * discount / 100);

        console.log(`Discount Applied: ${discount}%`);
        console.log(`Final Total: ₹${finalTotal}`);

        return finalTotal;
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 700, 2);

cart.applyCoupon("SAVE20");
