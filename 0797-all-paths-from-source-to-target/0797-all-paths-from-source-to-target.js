/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/*
I - Array of Arrays
O - Array of Arrays
C - none
E - Graph with one node in it

DFS
-----
States: path array
Basecase: When the current arrays length is 0, push copy current path to result array
Internal DFS

Psuedocode
if the graph has one node in it, return an array of array with 0
create result array

create dfs helper function
  if current graphs node has length of 0
    push copy of path array into result
    return
    
  iterate the graphs current node
    push current value into path
    invoke dfs passing in current value and path
    pop the path

invoke dfs with 0 and array with a 0 inside arguements

return result array
*/


var allPathsSourceTarget = function(graph) {
  if (!graph || !graph[0].length) return [[0]];
    
  let result = [];
  let n = graph.length - 1;
    
  const dfs = (nodeVal, path) => {
    if (nodeVal === n) {
      result.push([...path]);
      return;
    }
      
    for (let i = 0; i < graph[nodeVal].length; i++) {
      const currNode = graph[nodeVal][i];
      path.push(currNode);
      dfs(currNode, path);
      path.pop();
    }
  };
    
  dfs(0, [0]);
    
  return result;
};