// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  if (str1 === str2) {
    return true;
    return 0;
  }

  var numOfChanges = 0;

  for (var i = str1.length - 1; i >= 0; i--) {
    if (str1[i] !== str2[i]) {
      str2[i] = str1[i];
      numOfChanges++
    }
  }

  return numOfChanges;
}

//TEST

// console.log(editDistance('wednesday', 'sunday'));
