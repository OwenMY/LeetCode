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

/*
I- root
O- array of nums
C- none
E- if root is null return null

Psuedocode
if root is null, return root

create dfs helper function
  if root is null, return null
  
  recurse left branch
  recurse right branch
  
  if left branch recurse is not null
    push resulting val into result array
    
  if right branch recurse is not null
    push resulting val into result array
    
  
  return current roots val


create result array with roots val as first value

invoke the dfs helper function

return result array
*/

var inorderTraversal = function(root, result = []) {
  if (!root) return [];
    
  result = result.concat(inorderTraversal(root.left));
  result.push(root.val);
  result = result.concat(inorderTraversal(root.right));

  return result;
};