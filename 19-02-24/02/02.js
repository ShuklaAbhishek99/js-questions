console.log("JavaScript Date Object Lab");

//Create a new Date object called `currentDate` and log the current date and time
const date = new Date();

//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}-${month + 1}-${year}`;
}

//Create a function `getDayName` that takes a Date object and returns the day of the week as a string
function getDayName(date) {
  return date.getDay();
}

//Export the `formatDate` function using ESM syntax
export { formatDate };
