class BankAccount {
  #balance = 0;
  deposit(a) {
    this.#balance += a;
    console.log("Deposited:", a);
  }
  withdraw(a) {
    if (a > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= a;
  }
  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(5000);
try {
  acc.withdraw(7000);
} catch (e) {
  console.log("Bank Error:", e.message);
}
console.log("Final Balance:", acc.getBalance());
