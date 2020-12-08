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
  var sortedArray = [];
  var sort = function (arr) {
    partialSort = [];
    lessArray = [];
    moreArray = [];
    pivot = arr[Math.ceil((arr.length - 1) / 2)]
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i] < pivot) {
        lessArray.push(arr[i]);
      }
      if (arr[i] > pivot) {
        moreArray.push(arr[i]);
      }
    }
    console.log(lessArray);
    if(lessArray[0] !== undefined) {
      if (lessArray.length > 1) {
       lessArray = sort(lessArray);
      }
    }
    if(moreArray[0] !== undefined) {
      if (moreArray.length > 1) {
      moreArray = sort(moreArray);
      }
    }
    partialSort = partialSort.concat(lessArray);
    partialSort.push(pivot);
    partialSort = partialSort.concat(moreArray);
    return partialSort;
  }
  sortedArray = sort(array);
  return sortedArray;

};


var poodle = [5, 4, 3, 2, 1, 8, 7, 9, 11, 57, 42];
console.log(quicksort(poodle));