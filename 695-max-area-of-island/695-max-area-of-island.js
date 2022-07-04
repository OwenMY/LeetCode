/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
  let result = 0;
  let sum = 0;
    
  const bfs = (row, col) => {
    if (grid[row][col]) {
      sum++;
      grid[row][col] = 0;
    } else {
      return;
    }
      
      
    let queue = [
      [grid[row + 1]?.[col], row + 1, col],
      [grid[row - 1]?.[col], row - 1, col],
      [grid[row]?.[col + 1], row, col + 1],
      [grid[row]?.[col - 1], row, col - 1]
    ];
      
    for (let [val, qRow, qCol] of queue) {
      if (val) {
        bfs(qRow, qCol);
      }
    }
      
    return;
  };
    
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        bfs(i, j);
        if (sum > result) {
          result = sum;
        }
        sum = 0;
      }
    }
  }
  
  return result;
};