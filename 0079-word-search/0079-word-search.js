/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
I - matrix, string
O - boolean
C - none
E - cyclic traversal of graph

dfs backtracking
------------------
states: visited object that is created during initial dfs from matrix
basecase: is when the matrix is completely iterated
if the char found is the last character of the word string, change found boolean to true

Psuedocode

create getNeighbors function
  set xLimit to matrix row length
  set yLimit to matrix length
  create XDelta
  create YDelta
  
  create neighbors array
  
  iterate xDelta
    if coordinates are within limits and are not in visited
      push x and y coords in an array into neighbors
      
  return neighbors

create doesExist and set to false

create dfs function
  if current string char is equal to last char is word and word is length of 1
    set doesExist to true
    return
    
  iterate the invocation of getNeighbors
    if current char at coords is equal to the first letter of word
      set coordinates for visited to true
      invoke dfs with a slice of word leaving out first char
      set coordinates for visited to false


iterate the matrix
  iterate the row
    if current char is equal to first letter of word
      set visited for current coords to true
      invoke dfs passing in a slice of the word leaving out first char, also passing i and j
      set visited for current coords to false

return doesExist
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
    
   const dfs = (coords, word) => {
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
         dfs(neighbor, word.slice(1));
         visited[key] = false;
       }
     }
   };
   
   for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
         if (board[y][x] === word[0]) {
           const key = `${y},${x}`;
           visited[key] = true;
           dfs([y, x], word.slice(1));  
           visited[key] = false;
         }  
      }   
   }
    
   return doesExist;
};