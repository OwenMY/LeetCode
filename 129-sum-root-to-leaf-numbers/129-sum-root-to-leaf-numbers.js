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
I - root node
O - number
C - none
E - if root is null

dfs
==========
state: array of numbers, current sum total
if we reach a leaf, join array together, turn it into a number and add to sum total
in the end return the sum total

Psuedocode
  push rootinto path array
  
  create sumTotal and set to 0
  
  if roots left and right nodes are null
    join path array
    add path number to sumTotal
    return sumTotal
    
  if theres a left branch, add the recursive results of left branch to sumTotal, otherwise add 0
  if theres a right branch, add the recursive result of right branch to sumTotal, otherwise add 0
  
  pop root out of path array

  return sumTotal

*/

var sumNumbers = function(root, path = []) {
  let sumTotal = 0;
  path.push(root.val);
  
  if (!root.left && !root.right) {
    let numString = path.join('');
    sumTotal+= Number(numString);
  }
    
  sumTotal+= root.left ? sumNumbers(root.left, path) : 0;
  sumTotal+= root.right ? sumNumbers(root.right, path): 0;
    
  path.pop();
    
  return sumTotal;
};