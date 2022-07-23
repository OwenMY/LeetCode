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
 * @return {number}
 */

var goodNodes = function(root) {
  if (!root) return null;
    
  const dfs = (root, min_val) => {
    if (root.val >= min_val) sum++;
    
    if (root.left) dfs(root.left, Math.max(root.val, min_val));
    if (root.right) dfs(root.right, Math.max(root.val, min_val));
      
    return;
  };
    
  let sum = 0;
  dfs(root, root.val);
  return sum;
};