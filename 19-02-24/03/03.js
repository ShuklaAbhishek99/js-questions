const findSubstringIndex = (text, sub) => {
  if (text === "" || sub === "") return -1;
  else if (text.indexOf(sub)) {
    return text.indexOf(sub);
  }
};

export default findSubstringIndex;
