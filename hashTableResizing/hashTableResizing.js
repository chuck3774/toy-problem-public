/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value
) {
   var index = getIndexBelowMaxForKey(key);
   if(storage[index]) {
     storage[index].key = value;
     size++
   }
   if (!storage[index]) {
     storage[index] = {key: value};
     size++
   }

   if (size > storageLimit * .75) {
     oldStorage = storage;
     storage = [];
     storageLimit = storageLimit * 2;
     for (var i = 0; i < oldStorage.length; i++) {
       for (var key in oldStorage[i]) {
         this.insert(oldStorage[i].key);
       }
     }
   }

    // TODO: implement `insert`
  };

  result.retrieve = function(key
) {

   let index = getIndexBelowMaxForKey(key);
   if (storage[index].key === undefined) {
     return undefined;
   }

   return storage[index].key;
    // TODO: implement `retrieve`
  };

  result.remove = function(key
) {
  let index = getIndexBelowMaxForKey(key);
   delete storage[index].key;

   if (size < storageLimit * .25) {
    oldStorage = storage;
    storage = [];
    storageLimit = storageLimit / 2;
    for (var i = 0; i < oldStorage.length; i++) {
      for (var key in oldStorage[i]) {
        this.insert(oldStorage[i].key);
      }
    }
  }
    // TODO: implement `remove`
  };

  return result;
};

// var hashbrown = makeHashTable();
// console.log(hashbrown);
// hashbrown.insert('jerry', 'garcia');

