/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context
) {
  // TODO: Your code here
  let previousArgs = [].slice.call(arguments, 2);
  return function() {
      let currentArgs = [].slice.call(arguments);
      let combinedArgs = [].concat(previousArgs, currentArgs);

      return func.apply(context, combinedArgs);
    }
};

//TEST
// var alice = {
//   name: 'alice',
//   shout: function(){
//   console.log(this.name);
//   }
//   }
//   var boundShout = bind(alice.shout, alice);
//   console.log(boundShout()); // alerts 'alice'
//   boundShout = bind(alice.shout, {name: 'bob'});
//  console.log(boundShout()); // alerts 'bob'

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(context
) {
  // TODO: Your code here
  let func = this;
  let previousArgs = [].slice.call(arguments, 1);

  return function(){
    let currentArgs = [].slice.call(arguments);
    let combinedArgs = [].concat(previousArgs, currentArgs);
    return func.apply(context, combinedArgs);
  };
};
