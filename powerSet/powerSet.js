/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var uniqueStr;

  for (var k = 0; k < str.length; k ++) {
    if (k === 0) {
      uniqueStr = str[k];
    } else {
      let isDuplicate = false;
      for (let p = 0; p < uniqueStr.length; p ++) {
        if (uniqueStr[p] === str[k]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueStr = uniqueStr + str[k];
      }
    }
  };

  var set = [''];

  var subsetFinder = function(string) {

      set.push(string);

    for (var i = 0; i < uniqueStr.length; i ++) {
      var tempString = string;
       if(uniqueStr.indexOf(tempString[tempString.length - 1]) >= i) {
         continue;
       } else {
          subsetFinder(tempString + uniqueStr[i]);
       }

    }

  };
  for (var j = 0; j < uniqueStr.length; j ++) {
    subsetFinder(uniqueStr[j]);
  }

  return set;
};

// var test = powerSet('bbbbbaaaaa');
// console.log(test);

