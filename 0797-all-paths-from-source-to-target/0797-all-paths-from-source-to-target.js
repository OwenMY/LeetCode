/**
 * @param {number[][]} graph
 * @return {number[][]}
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