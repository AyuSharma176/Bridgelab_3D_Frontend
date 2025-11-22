// Q8: Custom myMap prototype method

Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i], i, this));
  }
  return resultArray;
};

console.log([1, 2, 3].myMap((num) => num * 2)); // [2, 4, 6]
