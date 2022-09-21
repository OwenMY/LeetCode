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

/*
I - node
O - boolean
C - none
E - no root

appraoch
dfs

if roots left and right are null and sum total is equal to target sum
  return true
otherwise 
  return false

Psuedocode
if there is no root, return false

create total Sum adding current number 
set left to recursive left
set right to recrusive right

if left and right are null and total sum is equal to target sum
  return true
  
if left or right are true
  return true
otherwise
  return false
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


