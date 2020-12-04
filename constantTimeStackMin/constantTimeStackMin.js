/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    var storage = [];
    var minValue = [];
    var currentLength = 0;

  // add an item to the top of the stack
    this.push = function(value) {
      storage.push(value);
      currentLength++;
      if (!minValue.length) {
        minValue.push(value);
      } else if (value < minValue[minValue.length - 1]) {
           minValue.push(value);
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      let removedItem = storage.pop();
      if (removedItem === minValue[minValue.length - 1]) {
        minValue.pop();
      };
      currentLength--;
    };

  // return the number of items in the stack
    this.size = function() {
      return currentLength;
    };

  // return the minimum value in the stack
    this.min = function() {
      return minValue[minValue.length - 1];

    };

  };

  var example = new Stack();
  example.push(4);
  example.push(3);
  console.log(example.min()); //3
  example.push(3);
   example.push(2);
   example.push(2);
   console.log(example.min()); //2
