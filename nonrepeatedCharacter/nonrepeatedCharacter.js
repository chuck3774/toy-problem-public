/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var arrayString = Array.from(string);
  var firstChar = undefined;
  for (var i = 0; i < arrayString.length; i ++) {
    if (!firstChar) {

      var count = 0;
      for (var j = 0; j < arrayString.length; j ++) {

           if (arrayString[i] === arrayString[j]) {

             count++;
           }

      }

      console.log(count);
      if (count === 1) {

        firstChar = arrayString[i];


    }

    } else {
      return firstChar;
    }
  }
  return firstChar;
  // TODO: your solution here
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
