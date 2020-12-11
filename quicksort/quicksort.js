/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  if (array.length <= 1) return array;
  var pivot = array[0], left = [], right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  left = quicksort(left);
  right = quicksort(right);
  var sorted = left.concat(pivot, right);
  return sorted;
  };



var poodle = [5, 4, 3, 2, 1, 8, 7, 9, 11, 57, 42];
console.log(quicksort(poodle));