function rotate(matrix) {
  const outputMat = [];
  let currentRow = [];
  //   let iteration = 0;
  let rowIndex = 0;
  while (rowIndex !== matrix[0].length) {
    for (let i = matrix.length - 1; i >= 0; i--) {
      currentRow.push(matrix[i][rowIndex]);
    }
    outputMat.push(currentRow);
    currentRow = [];
    rowIndex += 1;
  }
  return outputMat;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));
