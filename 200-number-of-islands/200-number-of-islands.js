/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, i, j);
        islands++;
      }
    }
  }  
    
  return islands;
};

const bfs = (grid, row, col) => {
  if (grid[row][col] === '1') {
    grid[row][col] = '0';
  }
    
  let queue = [];
  
  let adjacent = [
    [grid[row + 1]?.[col], row + 1, col],
    [grid[row - 1]?.[col], row - 1, col],
    [grid[row]?.[col + 1], row, col + 1],
    [grid[row]?.[col - 1], row, col - 1]
  ];
    
  for (let point of adjacent) {
    if (point[0] === '1') queue.push(point);
  }
  
  queue.forEach(([_, r, c]) => bfs(grid, r, c));
    
  return;
};