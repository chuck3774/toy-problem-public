/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string === '') {
    return null;
  }
  let arrString = string.split('');
  let currRun = '';
  let indexes = [];
  let longRun = [0, 0];
  arrString.map((letter, i) => {
    if (letter === currRun) {
       indexes[1] = i;
       if (indexes[1] - indexes[0] > longRun[1] - longRun[0]) {
         longRun[0] = indexes[0];
         longRun[1] = indexes[1];
       }
    } else {
      currRun = letter;
      indexes[0] = i;
      indexes[1] = i;

    }
  })
  return longRun;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


//TEST


// console.log(longestRun("abbbcc")) // [1, 3]
// console.log(longestRun("aabbc"))  // [0, 1]
// console.log(longestRun("abcd"))   // [0, 0]
// console.log(longestRun(""))
