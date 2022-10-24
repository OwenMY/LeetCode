/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const getNeighbors = (coords, board, visited) => {
  const xLimit = board[0].length;
  const yLimit = board.length;
  const yDelta = [0, 1, 0, -1];
  const xDelta = [1, 0, -1, 0];
    
  let neighbors = [];
  
  for (let i = 0; i < xDelta.length; i++) {
    const yCoord = yDelta[i] + coords[0];
    const xCoord = xDelta[i] + coords[1];
      
    if (yCoord >= 0 && yCoord < yLimit && xCoord >= 0 && xCoord < xLimit) {
      const newCoords = [yCoord, xCoord];
      const key = newCoords.toString();
        
      if (!visited[key]) neighbors.push(newCoords);
    }
  }
    
  return neighbors;
};

var exist = function(board, word) {
   let doesExist = false;
   const visited = {};
    
   const dfs = (coords, word, visited) => {
     if (!word.length) {
       doesExist = true;
       return;
     }
       
     const neighbors = getNeighbors(coords, board, visited);
     
     for (let neighbor of neighbors) {
       const [y, x] = neighbor;
       if (board[y][x] === word[0]) {
         const key = neighbor.toString();
         visited[key] = true;
         dfs(neighbor, word.slice(1), visited);
         visited[key] = false;
       }
     }
   };
   

   for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
         if (board[y][x] === word[0]) {
           const key = `${y},${x}`;
           visited[key] = true;
           dfs([y, x], word.slice(1), visited);  
           visited[key] = false;
         }  
      }   
   }
    
   return doesExist;
};