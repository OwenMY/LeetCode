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

/*
I - root
O - boolean
C - none
E - if root is return null

DFS
Base Case: if root is null, return null
State: current node of both sides

will utilize two stacks

Psuedocode
if root is null, return null

create left stack array with roots left if not null
create right stack array with roots right if not null

create current left node
create current right node

while loop until both stacks are empty
  set current left node to the the popping of the left stack
  set current right node to the popping of the right stack
  
  if current left and right nodes are different
    return false
    
  push left nodes left child into left stack
  push left nodes right child into left stack
  push right nodes right child into right stack
  push right nodes right child into right stack

return if stack are different lengths, false otherwise true
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


