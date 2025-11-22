// Q7: Closure-based multiplier

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

/*
How closure works:
makeMultiplier() returns an inner function.
That inner function STILL remembers the value of multiplier (3) 
even after makeMultiplier() has finished execution.
This is closure.
*/
