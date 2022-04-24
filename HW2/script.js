// HW2
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
  const rotations = calculateRotations(deg);

  return Array.from({ length: rotations }).reduce((a) => {
    return rotate90Deg(a);
  }, matrix);
};

// 2. Rotate all matrix elements except the diagonals
const rotateWithoutDiagonal = (matrix, deg) => {
  // code here
};

//------------------ Helper Functions ------------------

// the inclass version
const rotate90Deg = (matrix) => {
  let matrixNew = [];
  let innerArr = matrix[0];

  for (let j = 0; j < innerArr.length; j++) {
    let tmpArr = [];

    for (let i = matrix.length - 1; i >= 0; i--) {
      tmpArr.push(matrix[i][j]);
    }

    matrixNew.push(tmpArr);
  }

  return matrixNew;
};

const calculateRotations = (deg) => {
  if (deg % 90 !== 0) {
    throw new RangeError("Incorrect value");
  }

  let numOfRotations = (deg % 360) / 90;
  numOfRotations += numOfRotations < 0 ? 4 : 0;
  return numOfRotations;
};

//-----------------Tests--------------------

console.log(matrix);
// console.log(rotate90Deg(matrix));
console.log(rotate(matrix, 180));
console.log(matrix2);
// console.log(rotate90Deg(matrix2));
console.log(rotate(matrix2, 90));
