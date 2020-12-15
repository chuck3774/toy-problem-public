/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {

  if(string.length === 0) return [''];
  var result = {};
  string.split('').forEach(function(letter,i){
        var remainingLetters = string.slice(0,i) + string.slice(i+1);

         allAnagrams(remainingLetters).forEach(
             function(anagram){
         result[letter+anagram] = true;
});
});
      return Object.keys(result);

};

var anagrams = allAnagrams('abc');
console.log(anagrams);
