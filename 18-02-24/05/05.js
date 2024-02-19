export const isArmstrongNumber = (number) => {
  const Digits = [...String(number)];

  const totalSum = Digits.reduce(
    (total, current) => total + current ** Digits.length,
    0
  );

  return totalSum === number;
};
