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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  if (!root) return [];
    
  let nodes = dfs(root);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  
  return nodes[0];
};

const dfs = (node) => {
  let result = [node];
    
  result = node.left ? result.concat(dfs(node.left)) : result;
  result = node.right ? result.concat(dfs(node.right)) : result;
    
  return result;
}