/* eslint-disable no-case-declarations */
//inspired by https://javascript.plainenglish.io/building-a-sudoku-puzzle-generator-d55cead9656d

const easyPuzzles = [
  [
    [0, 0, 1, 0, 3, 0, 5, 6, 0],
    [8, 0, 0, 6, 0, 7, 0, 1, 0],
    [9, 0, 0, 5, 8, 0, 0, 4, 6],
    [0, 1, 2, 0, 0, 3, 4, 0, 0],
    [0, 0, 4, 0, 0, 0, 9, 0, 0],
    [0, 0, 8, 7, 0, 0, 6, 3, 0],
    [7, 2, 0, 0, 4, 6, 0, 0, 5],
    [0, 5, 0, 3, 0, 2, 0, 0, 4],
    [0, 8, 6, 0, 9, 0, 7, 0, 0],
  ],
  [
    [7, 8, 0, 0, 2, 0, 0, 0, 5],
    [0, 0, 1, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 9, 7, 0],
    [0, 4, 0, 0, 0, 1, 7, 3, 9],
    [3, 5, 6, 2, 0, 7, 1, 4, 8],
    [1, 7, 9, 8, 0, 0, 0, 6, 0],
    [0, 1, 2, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 2, 0, 0],
    [9, 0, 0, 0, 8, 0, 0, 5, 4],
  ],
]

const mediumPuzzles = [
  [
    [6, 0, 0, 0, 0, 5, 0, 7, 3],
    [0, 0, 0, 0, 1, 0, 8, 0, 0],
    [0, 0, 7, 0, 0, 8, 2, 1, 0],
    [5, 0, 0, 3, 0, 9, 0, 4, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 7, 0, 2, 0, 1, 0, 0, 6],
    [0, 9, 3, 7, 0, 0, 5, 0, 0],
    [0, 0, 5, 0, 8, 0, 0, 0, 0],
    [7, 6, 0, 5, 0, 0, 0, 0, 8],
  ],
  [
    [5, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 7, 3, 0, 2, 0, 0, 8],
    [0, 0, 0, 0, 5, 0, 1, 3, 0],
    [0, 1, 0, 0, 7, 8, 0, 0, 0],
    [0, 5, 8, 9, 2, 6, 3, 1, 0],
    [0, 0, 0, 1, 3, 0, 0, 9, 0],
    [0, 8, 6, 0, 4, 0, 0, 0, 0],
    [1, 0, 0, 7, 0, 3, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 3],
  ],
]

const hardPuzzles = [
  [
    [0, 8, 0, 4, 5, 0, 0, 0, 0],
    [5, 4, 0, 0, 2, 3, 0, 0, 0],
    [0, 1, 3, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 7, 5, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 9, 5, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 1, 4, 0],
    [0, 0, 0, 3, 7, 0, 0, 2, 5],
    [0, 0, 0, 0, 4, 6, 0, 9, 0],
  ],
  [
    [0, 2, 0, 0, 9, 0, 0, 0, 0],
    [0, 7, 0, 0, 3, 0, 0, 4, 0],
    [0, 3, 0, 0, 0, 0, 1, 0, 2],
    [0, 0, 8, 6, 0, 0, 0, 0, 4],
    [4, 0, 0, 3, 5, 9, 0, 0, 7],
    [3, 0, 0, 0, 0, 1, 6, 0, 0],
    [6, 0, 5, 0, 0, 0, 0, 9, 0],
    [0, 4, 0, 0, 8, 0, 0, 6, 0],
    [0, 0, 0, 0, 2, 0, 0, 5, 0],
  ],
]

// perform a random series of transformations on a random seed whenever I need to generate a puzzle. The transformations that you can do to any valid puzzle are:

// Rotate the matrix between 0 and 3 times
// Map all of the numbers to other numbers
// Shuffle any 2–3 rows or columns that span the same 3 boxes.

const rotateMatrix = (array) => {
  const n = array.length

  // Create a temporary matrix of size n x n
  let t = Array.from(Array(n), () => Array.from(Array(n)))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // basically array[i][j] gets moved to [j][n - (i + 1)]
      // e.g. array[0][0] => array[0][8] assuming 9x9 matrix
      let ele = array[i][j]
      let idx = n - (i + 1)

      t[j][idx] = ele
    }
  }
  return t
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const shuffleSudoku = (array) => {
  const shuffled = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const shuffledSudoku = array.map((row, index) => {
    row.map((num) => shuffled[num - 1])
  })

  return shuffledSudoku
}

const shuffleSudokuRows = (array) => {
  return [
    shuffle(array.slice(0, 3)),
    shuffle(array.slice(3, 6)),
    shuffle(array.slice(6, 9)),
  ].flat() // flat by default flattens array by one level
}

const shuffleSudokuColumns = (array) => {
  let arr = rotateMatrix(array)
  arr = shuffleSudokuRows(arr)
  arr = rotateMatrix(rotateMatrix(rotateMatrix(arr)))
  return arr
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

export const generateSudoku = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      let easySudoku = easyPuzzles[getRandomInt(0, easyPuzzles.length)]
      easySudoku = rotateMatrix(easySudoku)
      easySudoku = shuffleSudokuRows(easySudoku)
      easySudoku = shuffleSudokuColumns(easySudoku)
      return easySudoku

    case 'medium':
      let mediumSudoku = mediumPuzzles[getRandomInt(0, mediumSudoku.length)]
      mediumSudoku = rotateMatrix(mediumSudoku)
      mediumSudoku = shuffleSudokuRows(mediumSudoku)
      mediumSudoku = shuffleSudokuColumns(mediumSudoku)
      return mediumSudoku

    case 'hard':
      let hardSudoku = easyPuzzles[getRandomInt(0, easyPuzzles.length)]
      hardSudoku = rotateMatrix(hardSudoku)
      hardSudoku = shuffleSudokuRows(hardSudoku)
      hardSudoku = shuffleSudokuColumns(hardSudoku)
      return hardSudoku
  }
}
