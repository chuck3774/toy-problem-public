/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (
) {
  var results = [];
  var throws = ['R', 'P', 'S'];
  for (var k = 0; k < throws.length; k++) {
    for (var j = 0; j < throws.length; j++) {
      for (var i = 0; i < throws.length; i++) {
        results.push(throws[k] + throws[j] + throws[i]);
      }
    }
  }
  return results;
  // TODO: your solution here
};


//TESTS
// var game1 = rockPaperScissors();
// console.log(game1);

