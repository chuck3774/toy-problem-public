/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  if (total === 0) {
    return 1;
  }
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var counter = 0;

  var changeMaker = function (num, justAddedCoin, coin) {

      if (num === total) {
        counter++;
        return;
      }
      if (num > total) {
        return;
      }
      for (var i = 0; i < coins.length; i ++) {

           if(coin > coins[i] || justAddedCoin > coins[i]) {
             continue;
           } else {

             changeMaker(num + coins[i], coins[i], coin);
           }
         }
        }
  for (var j = 0; j < coins.length; j ++) {
    if (coins[j] > total) {
      break;
    } else {
      changeMaker(coins[j], 0, coins[j]);
    }
  }
  return counter;
};

// var test = makeChange(5);
// console.log(test);



