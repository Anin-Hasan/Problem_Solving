const readline = require("readline");

function selection_sort(arr) {
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers separated by commas: ", (input) => {
  const arr = input.split(",").map(Number);
  console.log(selection_sort(arr));
  rl.close();
});
