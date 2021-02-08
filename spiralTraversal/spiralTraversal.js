/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  const arr = [];
  while (matrix.length) {
    if(matrix[0].length === 1) {
      arr.push(matrix[0][0]);
      break;
    }
    arr.push(
      ...matrix.shift(),
      ...matrix.map(a => a.pop()),
      ...matrix.pop().reverse(),
      ...matrix.map(a => a.shift()).reverse()
    );
  }
  return arr;
}

var input = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

//TEST

// var result = spiralTraversal(input);

// console.log('result', result);

// // var input = [[1,2,3,4],
// // [5,6,7,8],
// // [9,10,11,12],
// // [13,14,15,16]]
// // var result = spiralTraversal(input);

// // console.log('result', result);



