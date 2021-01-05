/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  if (target > array[array.length -1]) {
    return null;
  }

  let index = 0;
  let length = array.length-1

  while (index <= length) {
    let mid = Math.floor((index + length)/2);

    if (target > array[mid]) {
      index = mid + 1;
    } else if (target < array[mid]) {
      length = mid -1;
    } else {
     return mid;
    }
  }
  return index;
};

//TEST
var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index);

