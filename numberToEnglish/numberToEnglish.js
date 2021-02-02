/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function (num) {
  // return my value as english words
  var word = num.toString();
  var wordArray = [];
  count = 0;

  for (var i = word.length - 1; i >= 0; i --) {
    count++;
    if (count === 1) {
      wordArray.push(numbersToWords[word[i]]);
    }
    if (count === 2) {
      wordArray.push('-')
      wordArray.push(numbersToWords[word[i] + '0'])
    }
    if (count === 3) {
      wordArray.push(' ')
      wordArray.push(numbersToPlace['100'])
      wordArray.push(' ')
      wordArray.push(numbersToWords[word[i]]);
    }
  }

  let stringified = '';
  for (let p = wordArray.length - 1; p >= 0; p --) {
      stringified += wordArray[p];
  }

  return stringified;
};

//TEST
var wordz = new Number;
console.log(wordz.toEnglish(237));

