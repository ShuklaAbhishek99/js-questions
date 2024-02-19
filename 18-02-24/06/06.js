const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  let stepsCount = 0;

  while (n != 1) {
    if (n % 2 == 0) {
      // even n/2
      n /= 2;
      stepsCount++;
    } else {
      // odd 3n+1
      n = 3 * n + 1;
      stepsCount++;
    }
  }

  return stepsCount;
};

console.log("TOTal Steps", steps(121));

// another recursive method
const stepss = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  const iterate = (number, step) => {
    if (number === 1) {
      return step;
    }

    return number % 2 === 0
      ? iterate(number / 2, step + 1)
      : iterate(3 * number + 1, step + 1);
  };
  return iterate(n, 0);
};
