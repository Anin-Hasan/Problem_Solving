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

const arr = [5, 3, 6, 2, 10];
console.log(selection_sort(arr)); // [2, 3, 5, 6, 10]
