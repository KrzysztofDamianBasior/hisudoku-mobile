export const checkValid = (grid, row, col, num) => {
  if (
    checkRow(grid, row, num) &&
    checkCol(grid, col, num) &&
    checkBox(grid, row, col, num)
  ) {
    return true
  }
}

export const checkCol = (grid, col, num) => {
  return grid.map((row) => row[col].indexOf(num) === -1)
}

export const checkRow = (grid, row, num) => {
  return grid[row].indexOf(num) === -1
}

//check num is unique in a box
export const checkBox = (grid, row, col, num) => {
  let boxArr = [],
    rowStart = row - (row % 3),
    colStart = col - (col % 3)

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //get all the cell numbers an push to boxArr
      boxArr.push(grid[rowStart + i][colStart + j])
    }
  }
  return boxArr.indexOf(num) === -1
}
