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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum, pathSum = 0) {
  if (!root) return false;
    
  const sumTotal = pathSum + root.val
  
  const left = root.left ? hasPathSum(root.left, targetSum, sumTotal) : null;
  const right = root.right ? hasPathSum(root.right, targetSum, sumTotal) : null;
    
  if (sumTotal === targetSum && left === null && right === null) return true;
 
  if (left || right) return true;
  return false;
};


