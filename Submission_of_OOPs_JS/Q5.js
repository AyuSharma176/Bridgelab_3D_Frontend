class User {
  constructor(n, r) {
    this.name = n;
    this.rating = r;
  }
}
class Driver extends User {
  constructor(n, r, v) {
    super(n, r);
    this.vehicle = v;
  }
}
class Trip {
  constructor(f, t, d) {
    this.from = f;
    this.to = t;
    this.distance = d;
  }
  calculateFare() {
    if (!this.distance || this.distance < 0)
      throw new Error("Invalid distance!");
    return this.distance * 12;
  }
}
try {
  console.log(new Trip("Delhi", "Noida", 15).calculateFare());
  console.log(new Trip("Delhi", "Noida", -5).calculateFare());
} catch (e) {
  console.log("Trip Error:", e.message);
}
