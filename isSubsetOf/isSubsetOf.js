/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  let subset = true;
  for (var i = 0; i < this.length; i ++) {
    let count = 0;
    for (var j = 0; j < arr.length; j ++) {
      if (this[i] === arr[j]) {
        count++
      }
    }
    if (count === 0) {
      subset = false;
    }
  }

  return subset;
};

//TEST

// var a = ['commit','push'];
//  console.log(a.isSubsetOf(['commit','rebase','push','blame']));
// var b = ['merge','reset','reset'];
// console.log(b.isSubsetOf(['reset','merge','add','commit']));
// var c = ['dog','reset','reset'];
// console.log(c.isSubsetOf(['reset','merge','add','commit']));
