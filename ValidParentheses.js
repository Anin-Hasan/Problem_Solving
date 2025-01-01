function isValid(s) {
  let stack = [];
  for (c of s) {
    if (c == "(" || c == "{" || c == "[") {
      stack.push(c);
    } else {
      if (
        !stack.length ||
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
}

const s = "({})";

const result = isValid(s);
console.log(result);
