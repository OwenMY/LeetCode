/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

/*
I - root node
O - array of strings
C - none
E - if root is empty, return empty. array

DFS Backtracking
states: current path
basecase: when both left and right children are null

Psuedocode
if root is null, return an empty array

create result array

create dfs function

  push current nodes value into path
  if (root.left) dfs(root.left); 
  if (root.right) dfs(root.right);
  if (!root.left && !root.right) push the joining of path into the result array
  pop current nodes value from path  
  
invoke dfs function
return result
*/

var binaryTreePaths = function(root) {
  if (!root) return [];
    
  let result = [];
    
  const dfs = (node, path) => {
    path.push(node.val);
      
    if (!node.left && !node.right) {
      result.push(path.join('->'));
      path.pop();
      return;
    }
      
    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
      
    path.pop();
  };
  
  dfs(root, []);
  return result;
};