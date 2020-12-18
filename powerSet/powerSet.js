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
  var set = [''];

  var subsetFinder = (string) => {

      set.push(string);

    for (var i = 0; i < str.length; i ++) {
      var tempString = string;
       if(str.indexOf(tempString[tempString.length - 1]) >= i) {
         continue;
       } else {
          subsetFinder(tempString + str[i]);
       }

    }

  }
  for (var j = 0; j < str.length; j ++) {
    subsetFinder(str[j]);
  }

  return set;
};

var test = powerSet('jump');
console.log(test);

