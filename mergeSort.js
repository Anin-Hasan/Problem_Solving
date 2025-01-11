function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = parseInt(arr.length / 2);
  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid);

  sortedLeft = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);

  return merge(leftHalf, rightHalf);
}

function merge(leftHalf, rightHalf) {
  result = [];
  let i = 0,
    j = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      result.push(leftHalf[i]);
      i++;
    } else {
      result.push(rightHalf[j]);
      j++;
    }
  }
  result.push(...leftHalf.slice(i));
  result.push(...rightHalf.slice(j));
  return result;
}

const arr = [3, 7, 6, -10, 15, 23.5, 55, -13, 9];
console.log(mergeSort(arr));
