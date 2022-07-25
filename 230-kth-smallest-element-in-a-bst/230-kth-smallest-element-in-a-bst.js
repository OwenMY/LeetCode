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
 * @param {number} k
 * @return {number}
 */

/*
I - root node
O - number
C - none
E - root is null

base case: if root is null, return null
to keep traversing: there must be children/branches

Psuedocode
if root is null, return null

create dfs helper (root)
  push current root val into result

  if roots left is not null, traverse left
  if roots right is not null, traverse right
  
  return
  
create result array
invoke dfs with root
sort result array
return kth element of result array
*/


var kthSmallest = function(root, k) {
  if (!root) return null
    
  const dfs = (root) => {
    result.push(root.val);
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
    return;
  };
    
  let result = [];
  dfs(root);
    
  result.sort((a, b) => a - b);
    
  return result[k - 1];
};