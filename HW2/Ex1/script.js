// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column,
// each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.
// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above.
// Note that the puzzle represented by grid does not have to be solvable.

// the output should be true
const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

// the output should be false
const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

function solution(grid) {
  // Implementation

  // the below is hardcoded for 9x9 sudoku, for a more dynamic solution the nested empty arrays could be added with a simple for loop
  let rows = [[], [], [], [], [], [], [], [], []];
  let columns = [[], [], [], [], [], [], [], [], []];
  let smallerGrids = [[], [], [], [], [], [], [], [], []];

  for (let r = 0; r < grid.length; r++) {
    // r = row; could be hardcoded 9 since it won't change but I like using .length more

    for (let c = 0; c < grid.length; c++) {
      // c = column

      if (grid[r][c] !== ".") {
        if (rows[r].includes(grid[r][c]) || columns[c].includes(grid[r][c]))
          return false;
        rows[r].push(grid[r][c]);
        columns[c].push(grid[r][c]);

        // finding which inner box's array to add to
        let smallGridIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

        if (smallerGrids[smallGridIndex].includes(grid[r][c])) return false;
        smallerGrids[smallGridIndex].push(grid[r][c]);
      }
    }
  }
  return true;
}

console.log(solution(grid1)); // true
console.log(solution(grid2)); // false
