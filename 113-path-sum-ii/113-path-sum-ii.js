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
 * @return {number[][]}
 */

/*
I - root node
O -arrat of arrays
C - none
E - root is null

dfs
state: current sum total, current array of values
if the current sum is equal to the target sum and both left and right childs are null
push a copy of the array into the result array

Psuedocode
if root is null, return root

create dfs
    push current nodes value into state array
    get sumTotal of arrays values
    
    if sumTotal is equal to target sum and both left and right children are null
      push a copy of state array into the result array
      
    if theres a left node, recurse passing in left node
    if theres a right node, recurse passing in the right node
    
    pop off current value off of the array
    
    return

create result array

invoke the dfs function

return result
*/

var pathSum = function(root, targetSum) {
    if (!root) return [];
    return dfs(root, targetSum);
};

const dfs = (node, targetSum, currSum = 0, state = [], result = []) => {
  state.push(node.val);
  currSum+= node.val;
    
  if (
    currSum === targetSum && 
    node.left === null && 
    node.right === null
  ) {
    result.push(state.slice());
  }
    
  result = node.left ? result.concat(dfs(node.left, targetSum, currSum, state)) : result;
  result = node.right ? result.concat(dfs(node.right, targetSum, currSum, state)) : result;
    
  currSum-= node.val;
  state.pop()
  
  return result;
};