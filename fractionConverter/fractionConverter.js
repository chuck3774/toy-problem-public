/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {

    let fraction = "/";
    let splitted = number.toString().split(".");
    if (splitted.length < 2) {
      fraction = number + fraction + 1;
      return fraction;
    }
    let bottom = Math.pow(10, splitted[1].length);
    let top = Math.floor(number * bottom);
    const areDividable = (number1, number2, factor) => {
      if (number1 % factor === 0 && number2 % factor === 0) {
        return true;
      } else {
        return false;
      }
    };
    const simplify = (top, bottom) => {
      let factors = [2, 5];
      let count = 0;
      factors.forEach(f => {
        if (areDividable(top, bottom, f)) {
          top = top / f;
          bottom = bottom / f;
        } else {
          count += 1;
        }
      });
      if (count === factors.length) {
        return top + fraction + bottom;
      } else {
        return simplify(top, bottom);
      }
    };
    return simplify(top, bottom);
  };


//TEST

// console.log(toFraction(0.5));
// console.log(toFraction(3.0));
// console.log(toFraction(2.5));


