var longest_CommonPrefix = function (strs) {
  let commonPref = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return commonPref;
      }
    }
    commonPref += char;
  }
  return commonPref;
};

strs = ["flower", "flow", "flight"];

console.log(longest_CommonPrefix(strs));
