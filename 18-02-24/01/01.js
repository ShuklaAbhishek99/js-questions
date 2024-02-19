export const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};

// OR
export const removeFalsy = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
};
