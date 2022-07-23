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
 * @return {boolean}
 */

var isValidBST = function(root, min_val, max_val) {
  const dfs = (root, min_val, max_val) => {
    if (!root) return true;
  
    if (root.val >= max_val) return false;
    if (root.val <= min_val) return false;
      
    return dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val);
  }
  
  return dfs(root, -Infinity, Infinity);
};