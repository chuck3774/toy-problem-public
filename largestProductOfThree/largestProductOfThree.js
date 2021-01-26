/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  let sortedArray = [...array].sort((a, b) => a - b);
  return sortedArray.pop() * sortedArray.pop() * sortedArray.pop();
};

//TEST

// console.log(largestProductOfThree([2, 1, 3, 7]));