// myMap function for map
function myMap(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

// myFilter function for filter
function myFilter(arr, callback) {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

// myReduce function for reduce
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  for (const item of arr) {
    accumulator = callback(accumulator, item);
  }
  return accumulator;
}

export { myMap, myFilter, myReduce };
