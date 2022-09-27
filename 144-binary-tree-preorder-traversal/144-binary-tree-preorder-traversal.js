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
 * @return {number[]}
 */

var preorderTraversal = function(root) {
  if (!root) return [];
  
  let result = [root.val];

  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));
    
  return result;
};