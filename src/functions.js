function findSpace(sudoku) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (sudoku[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return false;
}

// function isInCol(sudoku, numToCheck, col) {
//   for (let i = 0; i < 9; i++) {
//     if (sudoku[i][col] === numToCheck) {
//       return true;
//     }
//   }
//   return false;
// }

// function isInRow(sudoku, numToCheck, row) {
//   for (let i = 0; i < 9; i++) {
//     if (sudoku[row][i] === numToCheck) {
//       return true;
//     }
//   }
//   return false;
// }

// function isInGroup(sudoku, numToCheck, row, col) {
//   for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
//     for (
//       let j = Math.floor(col / 3) * 3;
//       j < Math.floor(col / 3) * 3 + 3;
//       j++
//     ) {
//       if (sudoku[i][j] === numToCheck) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function isValid(sudoku, numToCheck, row, col) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (
      sudoku[row][i] === numToCheck ||
      sudoku[i][col] === numToCheck ||
      sudoku[m][n] === numToCheck
    ) {
      return false;
    }
  }
  return true;
}

// function isValid(sudoku, numToCheck, row, col) {
//   let inCol = isInCol(sudoku, numToCheck, col);
//   let inRow = isInRow(sudoku, numToCheck, row);
//   let inGroup = isInGroup(sudoku, numToCheck, row, col);
//   if (!(inCol || inRow || inGroup)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let count = 0;
let start = 0;

export default function solve(sudoku) {
  if (!start) {
    start = Date.now();
  }
  let end = Date.now();
  if (end - start > 1000) {
    return true;
  }
  let space = findSpace(sudoku);
  let row, col;
  if (!space) {
    return true;
  } else {
    [row, col] = space;
  }

  for (let i = 1; i < 10; i++) {
    let numToCheck = i;
    if (isValid(sudoku, numToCheck, row, col)) {
      sudoku[row][col] = numToCheck;

      if (solve(sudoku)) {
        start = 0;
        return true;
      } else {
        sudoku[row][col] = 0;
      }
    }
  }
  return false;
}
