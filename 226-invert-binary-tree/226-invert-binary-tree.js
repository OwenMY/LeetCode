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
 * @return {TreeNode}
 */

var invertTree = function(root) {
  if (root === null) {
    return root;
  }
    
  let previousLeft = root.left;
  let previousRight = root.right;
    
  root.left = previousRight;
  root.right = previousLeft;
  
  if (root.left !== null) {
    invertTree(root.left);
  } 
  
  if (root.right !== null) {
    invertTree(root.right);
  }
    
  return root;
};