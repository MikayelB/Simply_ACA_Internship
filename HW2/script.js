//////////////////////////////////////////////////
//------------April 18
/* 
// let arr = [1, 3, 4];
// console.log(arr);

//////////////////////////////////////////////////
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 1,2,3      7,4,1
// 4,5,6  =>  8,5,2
// 7,8,9      9,6,3

const rotate90Deg = (matrix) => {
  let matrixNew = [];
  let innerArr = matrix[0];

  for (j = 0; j <= innerArr.length; j++) {
    let tmpArr = [];

    for (i = matrix.length - 1; i >= 0; i--) {
      tmpArr.push(matrix[i][j]);
    }

    matrixNew.push(tmpArr);
  }

  return matrixNew;
};

console.log(matrix);
console.log(rotate90Deg(matrix));

//////////////////////////////////////////////////

const calculateRotations = (deg) => {
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

//////////////////////////////////////////////////

const t = [1, 6, 99, -9, -20, 0, 0, 63];
// sort without <>

Array.prototype.mySort = function () {};

 */
//////////////////////////////////////////////////
//------------April 20

/////
// factorial using recursion
function factorial(num) {
  if (num == 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(5));

/////
// Fibonacci using recursion
function fibonacci(num) {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(5));
// console.log(fibonacci(6));

/////
// recursive function that given an array return the sum of all elements in the array
function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  /// using slice
  // return arr[0] + sumOfArray(arr.splice3(1, arr.length));

  // using pop
  return arr.pop() + sumOfArray(arr);
}

let array = [1, 2, 3, 4, 5];
// console.log(sumOfArray(array));

/////
// recursive function that given a number reverses it so 123 -> 321

function reverseANumber(num) {
  let str = String(num);

  // debugger;
  if (str.length === 1) return num;

  return str[str.length - 1] + reverseANumber(Number(str.slice(0, -1)));
}

// console.log(reverseANumber(124));

/////
// 1st argument: an array with numbers
// 2nd argument gives a number find the index of the given 2nd occurance

function findRepeated(arr, number, count = 0, index = 0) {
  if (arr[index] === number) {
    count++;
  }

  if (count === 2) {
    return index;
  }

  return findRepeated(arr, number, count, ++index);
}

const array1 = [1, 2, 32, 34, 4, 5, 2, 5, 32];
// console.log(findRepeated(array1, 2));

/////
// return the number of instanses of a specific text in another text recursively
// "kjkjkjkjhasljekjiowerkj"
// "kj"

function findNumOfSubstrings(str, substr, count = 0) {
  if (substr.length > str.length) {
    return count;
  }

  if (substr === str) {
    return 1;
  }
  if (!str.length) return count;

  let toSlicePoint = str.search(substr);
  return findNumOfSubstrings(
    str.slice(toSlicePoint + substr.length),
    substr,
    count + 1
  );
}

const str = "kjkjkjkjhasljekjiowerkj";
const substr = "kj";
// console.log(findNumOfSubstrings(str, substr));

/////
// recursively replase pi with 3.14 in a string
//
