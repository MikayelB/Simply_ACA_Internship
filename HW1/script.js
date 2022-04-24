// HW 1

// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

// Implement these methods

Array.prototype.find = function (arr, callbackFN) {
  // implementation

  const index = this.findIndex(arr, callbackFN);

  if (index === -1) return undefined;

  return arr[index];
};

Array.prototype.findIndex = function (arr, callbackFN) {
  // implementation

  for (let i = 0; i < arr.length; i++) {
    if (callbackFN(arr[i], i, arr)) return i;
  }
  return -1;
};

Array.prototype.lastIndexOf = function (arr, value) {
  // implementation

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) return i;
  }
  return -1;
};

Array.prototype.some = function (arr, callbackFN) {
  // implementation

  for (let i = 0; i < arr.length; i++) {
    if (callbackFN(arr[i], i, arr)) return true;
  }
  return false;
};

Array.prototype.every = function (arr, callbackFN) {
  // implementation

  for (let i = 0; i < arr.length; i++) {
    if (!callbackFN(arr[i], i, arr)) return false;
  }
  return true;
};

Array.prototype.reduce = function (arr, callbackFN, initVal) {
  // implementation

  let acc = initVal;
  let startIndex = 0;

  if (initVal === undefined) {
    acc = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    acc = callbackFN(acc, arr[i], i, arr);
  }

  return acc;
};

Array.prototype.reduceRight = function (arr, callbackFN, initVal) {
  // implementation

  let acc = initVal;
  let startIndex = arr.length - 1;

  if (!initVal) {
    acc = arr[startIndex];
    startIndex--;
  }

  for (startIndex; startIndex >= 0; startIndex--) {
    acc = callbackFN(acc, arr[startIndex], startIndex, arr);
  }
  return acc;
};

Array.prototype.join = function (arr, separator) {
  // implementation

  let string = "";
  let sep = "";

  for (let i = 0; i < arr.length; i++) {
    string += sep + arr[i];
    sep = separator;
  }
  return string;
};

Array.prototype.pop = function (arr) {
  // implementation

  const x = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return x;
};

Array.prototype.unshift = function (arr, ...values) {
  // implementation

  const newArr = values.concat(...arr);

  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }
  return arr.length;
};
