const Today = new Date();

// Day
const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log("Today is :", Days[Today.getDay()] + ".")

// Current Time
let hour = Today.getHours();
let minute = Today.getMinutes();
let second = Today.getSeconds();

// AM or PM
let prepand = (hour >= 12) ? "PM" : "AM";

// 24 hours to 12 hours
hour = (hour > 12) ? hour - 12 : hour

console.log("Current time is: ", hour + prepand + " : " + minute + " : " + second)