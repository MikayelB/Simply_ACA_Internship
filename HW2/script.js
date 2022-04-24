const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

// You can use more than one function

// 1. Rotate any matrix
const rotate = (matrix, deg) => {
  // code here
};

// 2. Rotate all matrix elements except the diagonals
const rotateWithoutDiagonal = (matrix, deg) => {
  // code here
};

const rotate90Deg = (matrix) => {
  let matrixNew = [];
  let innerArr = matrix[0];

  // to compare in the for loop
  let appropriateLength;
  if (innerArr.length < matrix.length) {
    appropriateLength = matrix.length;
  } else {
    appropriateLength = innerArr.length - 1;
  }

  for (j = 0; j <= appropriateLength; j++) {
    let tmpArr = [];

    for (i = matrix.length - 1; i >= 0; i--) {
      // debugger;
      tmpArr.push(matrix[i][j]);
    }

    matrixNew.push(tmpArr);
  }

  return matrixNew;
};

console.log(matrix);
console.log(rotate90Deg(matrix));
console.log(matrix2);
console.log(rotate90Deg(matrix2));

//////////////////////////////////////////////////

/* const calculateRotations = (deg) => {
  if (deg % 90 !== 0) {
    throw new RangeError("Incorrect value");
  }

  let numOfRotations = (deg % 360) / 90;
  numOfRotations += numOfRotations < 0 ? 4 : 0;
  return numOfRotations;
};

const rotate = (matrix, deg) => {
  const numOfRotations = calculateRotations(deg);
  let newMatrix = matrix;

  for (let i = 0; i < numOfRotations; i++) {
    newMatrix = rotate90Deg(newMatrix);
  }
  return newMatrix;
};

console.log(matrix);
console.log(rotate(matrix, 540));
 */
