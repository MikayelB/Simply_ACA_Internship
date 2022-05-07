// Sorting without comparison of elements
// All the elements in the array are integers

const sort = (input) => {
  //// using counting sort

  const max = Math.max(...input);
  let count;
  const tmp = new Array(max + 1).fill(0); // new array sized max+1 filled with 0s

  // counting the number of each element in the array and adding to tmp
  for (let i = 0; i < input.length; i++) {
    count = input[i];
    tmp[count]++;
  }

  // adding and updating the counts (see the counting sort logic for more details)
  for (let i = 1; i <= max; i++) {
    tmp[i] = tmp[i] + tmp[i - 1];
  }

  // the final array
  const finalArr = new Array(input.length).fill(0);

  for (let i = input.length - 1; i >= 0; i--) {
    count = input[i];
    finalArr[tmp[count] - 1] = count;

    tmp[count] = tmp[count] - 1;
  }

  return finalArr;
};

let arr = [4, 2, 1, 5, 7, 12];
console.log(arr);
console.log(sort(arr));
