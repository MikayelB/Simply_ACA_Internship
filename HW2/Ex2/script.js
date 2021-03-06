// Once upon a time, in a kingdom far, far away, there lived a King Byteasar I.
// As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant.
// One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws!
// In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?

// The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way).
// He personally prepared the roadRegister of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams,
// i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he has decreed must check his calculations.

// Attached file HW-2_photo.png

// the output should be true
const roadRegister1 = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
  [false, true, false, false, false, false, false],
  [true, false, false, false, false, false, false],
  [false, false, false, true, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, false, false, true],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister = [
  [false, true, false],
  [false, false, false],
  [true, false, false],
];

function solution(roadRegister) {
  // Implementation

  for (let i = 0; i < roadRegister.length; i++) {
    outArr = roadRegister[i];
    numOfOut = 0;
    numOfIn = 0;

    // debugger;
    // adding the number of outwards going roads from each number/city
    for (let j = 0; j < outArr.length; j++) {
      if (outArr[j]) numOfOut++;
    }
    // adding the number of inwards coming roads for that specific number/city
    for (let k = 0; k < roadRegister.length; k++) {
      if (roadRegister[k][i]) numOfIn++;
    }

    // comparing the total numbers of roads coming in and going out
    if (numOfIn !== numOfOut) return false;
  }
  return true;
}

console.log(solution(roadRegister1));
console.log(solution(roadRegister2));
console.log(solution(roadRegister));
