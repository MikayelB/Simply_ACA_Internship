// HW 1

// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;
Array.prototype.map = null;
// ==============================

// Implement these methods

/*  Note 
I had all the arrays (on which the methods shuold have been called) as an argument, then I realized that it shouldn't be called as an argument but that I should use 'this' instead, hopefully that's correct
*/

Array.prototype.find = function (callbackFN) {
  // implementation

  const index = this.findIndex(callbackFN);

  if (index === -1) return undefined;

  return this[index];
};

Array.prototype.findIndex = function (callbackFN) {
  // implementation

  for (let i = 0; i < this.length; i++) {
    if (callbackFN(this[i], i, this)) return i;
  }
  return -1;
};

Array.prototype.lastIndexOf = function (value) {
  // implementation

  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === value) return i;
  }
  return -1;
};

Array.prototype.some = function (callbackFN) {
  // implementation

  for (let i = 0; i < this.length; i++) {
    if (callbackFN(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.every = function (callbackFN) {
  // implementation

  for (let i = 0; i < this.length; i++) {
    if (!callbackFN(this[i], i, this)) return false;
  }
  return true;
};

Array.prototype.reduce = function (callbackFN, initVal) {
  // implementation

  let acc = initVal;
  let startIndex = 0;

  if (initVal === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = callbackFN(acc, this[i], i, this);
  }

  return acc;
};

Array.prototype.reduceRight = function (callbackFN, initVal) {
  // implementation

  let acc = initVal;
  let startIndex = this.length - 1;

  if (!initVal) {
    acc = this[startIndex];
    startIndex--;
  }

  for (startIndex; startIndex >= 0; startIndex--) {
    acc = callbackFN(acc, this[startIndex], startIndex, this);
  }
  return acc;
};

Array.prototype.join = function (separator) {
  // implementation

  let string = "";
  let sep = "";

  for (let i = 0; i < this.length; i++) {
    string += sep + this[i];
    sep = separator;
  }
  return string;
};

Array.prototype.pop = function () {
  // implementation

  const x = this[this.length - 1];
  this.length = this.length - 1;
  return x;
};

Array.prototype.unshift = function (...values) {
  // implementation

  const newArr = values.concat(...this);

  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }
  return this.length;
};
