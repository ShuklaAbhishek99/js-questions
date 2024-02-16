function sum(...args) {
    return args.reduce((val1, val2)=> val1 + val2);
}

console.log(sum(1, 2, 3, 4, 5)); // returns 15
console.log(sum(2, 342, 54, 2, 51)); // returns 451
console.log(sum(1, 12, 34, 2, 42, 12)); // returns 103
