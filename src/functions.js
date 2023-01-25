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

function isInCol(sudoku, numToCheck, col) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][col] === numToCheck) {
      return true;
    }
  }
  return false;
}

function isInRow(sudoku, numToCheck, row) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[row][i] === numToCheck) {
      return true;
    }
  }
  return false;
}

function isInGroup(sudoku, numToCheck, row, col) {
  for (let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
    for (
      let j = Math.floor(col / 3) * 3;
      j < Math.floor(col / 3) * 3 + 3;
      j++
    ) {
      if (sudoku[i][j] === numToCheck) {
        return true;
      }
    }
  }
  return false;
}

function isItValid(sudoku, numToCheck, row, col) {
  let inCol = isInCol(sudoku, numToCheck, col);
  let inRow = isInRow(sudoku, numToCheck, row);
  let inGroup = isInGroup(sudoku, numToCheck, row, col);
  if (!(inCol || inRow || inGroup)) {
    return true;
  } else {
    return false;
  }
}

export default function solve(sudoku) {
  let space = findSpace(sudoku);
  let row, col;
  if (!space) {
    return true;
  } else {
    [row, col] = space;
  }

  for (let i = 1; i < 10; i++) {
    let numToCheck = i;
    if (isItValid(sudoku, numToCheck, row, col)) {
      sudoku[row][col] = numToCheck;

      if (solve(sudoku)) {
        return true;
      }

      sudoku[row][col] = 0;
    }
  }
  return false;
}
