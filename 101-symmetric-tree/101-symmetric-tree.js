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

var isSymmetric = function(root) {
  if (!root) return null;
    
  let leftStack = root.left ? [root.left] : [];
  let rightStack = root.right ? [root.right] : [];
    
  let leftNode = null;
  let rightNode = null;
    
  while (leftStack.length && rightStack.length) {
    leftNode = leftStack.pop();
    rightNode = rightStack.pop();
    
    if (!leftNode && !rightNode) {
      continue;
    } else if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false;
    }

      
    leftStack.push(leftNode.left);
    leftStack.push(leftNode.right);
    rightStack.push(rightNode.right);
    rightStack.push(rightNode.left);
  }
    
  return leftStack.length !== rightStack.length ? false : true;
};


