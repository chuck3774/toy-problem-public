/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  const tree = Object.create(treeMaker.methods);
  tree.value = value;
  tree.children = [];
  return tree;

  //tree code goes here!
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value
) {
  let child = treeMaker(value);
  this.children.push(child);
};

treeMaker.methods.contains = function(value
) {
  if (this.value === value) {
    return true;
  } else if (this.children[0]) {
    let contains = false;
    for (let i = 0; i < this.children.length; i ++) {
      if (this.children[i].contains(value)) {
        contains = true;
      };
    }
    return contains;

  }
};

//TEST

// var tree = treeMaker(3);
// console.log(tree);
// tree.addChild(1);
// tree.addChild(2);
// console.log(tree.contains(4));
