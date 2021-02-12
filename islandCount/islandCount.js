/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  let counter = 0;

  const islandSearch = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < mapStr.length &&
      j < mapStr[i].length &&
      mapStr[i][j] === '.'
    ) {
      mapStr[i][j] = '0';
      islandSearch(i + 1, j);
      islandSearch(i, j + 1);
      islandSearch(i - 1, j);
      islandSearch(i, j - 1);
    }
  };

  for (let i = 0; i < mapStr.length; i += 1) {
    for (let j = 0; j < mapStr[i].length; j += 1) {
      if (mapStr[i][j] === '.') {
        counter += 1;
        islandSearch(i, j);
      }
    }
  }

  return counter;
}
