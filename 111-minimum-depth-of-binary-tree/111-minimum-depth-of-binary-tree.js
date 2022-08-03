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

var minDepth = function(root, depth = 1) {
  if (!root) return null;
    
  let left = minDepth(root.left, depth + 1) || Infinity;
  let right = minDepth(root.right, depth + 1) || Infinity;
    
  if (left === Infinity && right === Infinity) return depth;
    
  return Math.min(left, right);
};