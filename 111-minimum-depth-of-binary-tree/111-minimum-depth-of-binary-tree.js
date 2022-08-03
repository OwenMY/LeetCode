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

/*
I- node
O- number
C- none
E- if root is null

base case: if current node is null, return null
state: keep track of current depth

Psuedocode
if root is null return null

traverse left
traverse right

if both are null, return current roots value

return the minimum of the the left or right side

*/

var minDepth = function(root, depth = 1) {
  if (!root) return null;
    
  let left = minDepth(root.left, depth + 1) || Infinity;
  let right = minDepth(root.right, depth + 1) || Infinity;
    
  if (left === Infinity && right === Infinity) return depth;
    
  return Math.min(left, right);
};