/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(originalList1, list1, list2, flips=0) {
  // console.log(list1);
  if (list1.value === list2.value) {
    console.log(list1.value);
    return list1.value;
  }
  else if (list1.next) {
    return linkedListIntersection(originalList1, list1.next, list2, flips)
  } else if (list2.next) {
    console.log(flips);
    if (flips === 0){
      return linkedListIntersection(originalList1, list2.next, originalList1, 1)

    } else {
    return null;
  }
  // TODO: Implement this function!
}
}

var list1 = Node('X');
list1.next = Node('Y');
list1.next.next = Node('Z');
list1.next.next.next = Node('D');
list1.next.next.next.next = Node('E');

var list2 = Node('A');
list2.next = Node('B');
list2.next.next = Node('C');
list2.next.next.next = Node('D');
list2.next.next.next.next = Node('E');

console.log(linkedListIntersection(list1, list1, list2));

