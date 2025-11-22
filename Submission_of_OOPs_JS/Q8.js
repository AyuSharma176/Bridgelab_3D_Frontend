class MovieTicket {
  constructor(n, s, p) {
    this.movieName = n;
    this.seatNo = s;
    this.price = p;
  }
}
MovieTicket.prototype.printTicket = function () {
  console.log(
    `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`
  );
};
class OnlineTicket extends MovieTicket {
  constructor(n, s, p, f) {
    super(n, s, p);
    this.convenienceFee = f;
  }
  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}
const t1 = new OnlineTicket("Avengers", "A12", 200, 20);
t1.printTicket();
console.log("Total Amount:", t1.getTotalAmount());
