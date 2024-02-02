const Today = new Date();

let day = Today.getDate();
let month = Today.getMonth() + 1;
let year = Today.getFullYear();

day = (day < 10) ? ("0" + day) : day;
month = (month < 10) ? ("0" + month) : month;

console.log(month + "-" + day + "-" + year)
console.log(month + "/" + day + "/" + "/" + year)
console.log(day + "-" + month + "-" + year)
console.log(day + "/" + month + "/" + "/" + year)