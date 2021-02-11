/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n) {

  var paths = 0;
  var board = makeBoard(n);
  var findPaths = function (i, j) {
    if (i === n - 1 && j === n - 1) {
      paths++;
      return;
    }
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return;
    }
    if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      board.togglePiece(i, j);
      findPaths(i, j + 1);
      findPaths(i + 1, j);
      findPaths(i, j - 1);
      findPaths(i - 1, j);
      board.togglePiece(i, j);
    }
  };

  findPaths(0, 0);
  return paths;
};

//TEST

// console.log(robotPaths(1));
// console.log(robotPaths(2));
// console.log(robotPaths(3));

