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
 * @return {number}
 */

/*
I - node
O - array of values
C - none
E - no root

----------------------
dfs
states: track every sum, track every combo
base case: if left and right nodes are null

Strategy
Every execution context, 
  create a new sum in the sum array
  add the current value to every sum in the sum array
  create a new array of combos
  add the current value to each array in combos
  
At the end of each execution context
  pop off current sum
  subtract the current value from every sum in the sum array
  pop off current array of combos
  remove the current value from all arrays of combos

----------------------
Psuedocode
if there is no root, return an empty array
return the invokation of depth first search

create dfs function
  create result starting at 0;
  
  iterate the sum array 
    add current value to all sums in sum array
    if currSum is equal to the targetSum
      increment result
  
  push current value into the sums array
  
  iterate the combos array
    push the current value into combo array

    
  create new combo array with current value and push it into combo array
  
  if theres a left child, add the recursive dfs result to result
  if theres a right child, add the recursive dfs result to result
  
  pop the sumArray
  pop the comboArray
  
  iterrate the sumArray
    subtract current value from current sum
    
  iterate the comboArray
    pop the current value from the current combo
  
  return result
*/

const pathSum = function(root, targetSum, sumArray = []) {
  if (!root) return 0;
  let paths = 0;
    
  for (let i = 0; i < sumArray.length; i++) {
    sumArray[i] = sumArray[i] + root.val;
    if (sumArray[i]  === targetSum) paths++;
  }
    
  sumArray.push(root.val);
  if (root.val === targetSum) paths++;
    
  paths+= root.left ? pathSum(root.left, targetSum, sumArray) : 0;
  paths+= root.right ? pathSum(root.right, targetSum, sumArray) : 0;
    
  sumArray.pop();
    
  for (let i = 0; i < sumArray.length; i++) {
    sumArray[i] = sumArray[i] - root.val;
  }
    
  return paths;
};