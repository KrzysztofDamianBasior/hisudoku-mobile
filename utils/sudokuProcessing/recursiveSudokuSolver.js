import { checkValid } from './validateSudoku'

export default function recursiveSudokuSolver(initial) {
  let sudoku = getDeepCopy(initial)
  solver(sudoku)
  return sudoku
}

function getDeepCopy(arr) {
  return JSON.parse(JSON.stringify(arr))
}

function getNext(row, col) {
  // if col reaches 8, increase row number
  // if row reaches 8 and col reaches 8, next will be [0,0]
  // if col doesn't reach 8, increase col number
  return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0]
}

function solver(grid, row = 0, col = 0) {
  if (grid[row][col] !== -1) {
    let isLast = row >= 8 && col >= 8
    if (!isLast) {
      let [newRow, newCol] = getNext(row, col)
      return solver(grid, newRow, newCol)
    }
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValid(grid, row, col, num)) {
      grid[row][col] = num

      let [newRow, newCol] = getNext(row, col)

      if (!newRow && !newCol) {
        return true
      }
      if (solver(grid, newRow, newCol)) {
        return true
      }
    }
  }
}
