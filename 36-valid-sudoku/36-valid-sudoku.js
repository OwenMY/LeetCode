/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
  let set = new Set();
  let count = 0;
    
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        count++;
        set.add(board[i][j] + 'found in row' + i);
        set.add(board[i][j] + 'found in col' + j);
        set.add(board[i][j] + 'found in grid' + Math.floor(i / 3) + '-' + Math.floor(j / 3));
      }
    }
  }
    
  return Math.floor(set.size / 3) === count;
};
