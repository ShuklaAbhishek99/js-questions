const areAnagrams = (strOne, strTwo) => {
  strOne = strOne.trim();
  strOne = strOne.toLowerCase();
  strOne = Array.from(strOne);
  strOne = strOne.sort();

  strTwo = strTwo.trim();
  strTwo = strTwo.toLowerCase();
  strTwo = Array.from(strTwo);
  strTwo = strTwo.sort();

  strOne = strOne.join("");
  strTwo = strTwo.join("");

  return strOne === strTwo;
};

console.log(areAnagrams("cinema   ", "    iceman"));
console.log(areAnagrams("restful", "fluster"));
console.log(areAnagrams("hello", "world"));
