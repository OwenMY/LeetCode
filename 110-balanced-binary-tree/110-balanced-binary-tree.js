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

var isBalanced = function(root) {
  if (root === null) {
    return true;
  }

  return !!findBalance(root);
};

const findBalance = (root) => {
  if (!root) {
    return 0;
  }
    
  let left = findBalance(root.left);
  let right = findBalance(root.right);
    
  if (left === false || right === false || Math.abs(left - right) > 1) {
    return false;
  }
  
  return Math.max(left, right) + 1;
}