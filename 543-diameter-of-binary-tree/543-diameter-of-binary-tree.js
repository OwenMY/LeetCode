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

var diameterOfBinaryTree = function(root) {
  if (!root) {
    return 0;
  }
    
  const getPathLengths = (node) => {
    if (!node) {
      return 0;
    }
      
    let left = getPathLengths(node.left);
    let right = getPathLengths(node.right);
      
    return Math.max(left, right) + 1;
  }
  
  let leftBranch = getPathLengths(root.left);
  let rightBranch = getPathLengths(root.right);
  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);
    
  return Math.max(leftBranch + rightBranch, leftDiameter, rightDiameter);
};