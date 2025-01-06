const arr = [2, 5, 1, 3, 4];

function selection_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

console.log(selection_sort(arr));
