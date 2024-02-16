const side1 = 5, side2 = 6, side3 = 7;

const S = (side1 + side2 + side3)/2;
const area = Math.sqrt(S * (S-side1) * (S-side2) * (S-side3));

console.log(area)