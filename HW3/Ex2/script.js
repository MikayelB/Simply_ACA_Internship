// We have number of chess players and some finished matches,
// you should write a function and find out which players should play together

// The matches should be returned in an sorted array, with each match stored as [m-i, m-j], where m-i < m-j

// Example
// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]
// the output should be
// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]

//// multiplyRange and combinChoose are for checking the size of the finishedMatches
// helper for below function
function multiplyRange(a, b) {
  let product = a;
  let i = a;

  while (i++ < b) {
    product *= i;
  }
  return product;
}

// n!/(r!*(n - r)!)
function combinChoose(n, r) {
  // base case for choose
  if (n == r || r == 0) {
    return 1;
  } else {
    if (r < n - r) {
      r = n - r;
    } else r = r;

    return multiplyRange(r + 1, n) / multiplyRange(1, n - r);
  }
}
// console.log(combinChoose(4, 2));
// console.log(combinChoose(5, 2));
// console.log(combinChoose(185, 33));

const solution = (chessPlayers, finishedMatches) => {
  if (finishedMatches.length === combinChoose(chessPlayers, 2)) {
    return console.log("All matches are done");
  }

  // adding all the possible combination of games to the array below
  let toBePlayed = [];
  for (let i = 0; i < chessPlayers; i++) {
    for (let j = i + 1; j < chessPlayers; j++) {
      toBePlayed.push([i, j]);
    }
  }
  console.log(toBePlayed);

  /////////////////////

  let tmp = [];

  // sorting the finishedMatches array and its nested arrays
  for (let i = 0; i < finishedMatches.length; i++) {
    finishedMatches[i].sort();
  }
  finishedMatches.sort();

  // comparing everything
  for (let i = 0; i < toBePlayed.length; i++) {
    let count = 0;

    for (let j = 0; j < finishedMatches.length; j++) {
      let arr1 = toBePlayed[i];
      let arr2 = finishedMatches[j];

      // debugger;
      if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        break;
      } else {
        count++;
      }
      if (count === finishedMatches.length) {
        tmp.push(arr1);
      }
    }
  }
  toBePlayed = tmp;

  // console.log(toBePlayed);
  return toBePlayed;
};

const finishedMatches = [
  [0, 1],
  [1, 2],
  [2, 0],
];

// solution(4, finishedMatches);
console.log(solution(4, finishedMatches));
