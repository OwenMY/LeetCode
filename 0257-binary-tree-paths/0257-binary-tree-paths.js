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