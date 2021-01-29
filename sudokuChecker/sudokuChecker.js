/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  function sudokuChecker(board) {

    function isSolved(s) {
      s = s.split('').sort().join('');
      return s === '123456789';
    }

    const rows = board.split('\n');

    for (let i = 0; i < rows.length; i++) {
      if (!isSolved(rows[i])) {
        return 'invalid';
      }

      let col = '';
      for (let j = 0; j < 9; j++) {
        col += rows[i][j];

        if (i % 3 === 0 && j % 3 === 0) {
          let grid = '';

          for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
              grid += rows[i+y][j+x];
            }
          }

          if (!isSolved(grid)) {
            return 'invalid';
          }
        }
      }

      if (!isSolved(col)) {
        return 'invalid';
      }
    }

    return 'solved';
  }


}

//TEST

// const test = "735814296\n
// 896275314\n
// 214963857\n
// 589427163\n
// 362189745\n
// 471356982\n
// 923541678\n
// 648792531\n
// 157638429";

// console.log(sudokuChecker(test));
