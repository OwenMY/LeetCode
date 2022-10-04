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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*
I - root node
O - root node
C - none
E - if root is null

dfs
state: array with preorder traversal of the tree nodes
base case: when a null value is reached, go to the other side

strategy: traverse tree and place all nodes into an array
iterate the array and set all lefts to null and rights to the next element in that array

Psuedocode
if root is null, return an empty array
invoke dfs and assign it to a variable, should return an array
iterate the array,
  if last element, break;
  set the current elements left to null
  set the current right to the next element

return the 1st element in the array

create dfs 
    create result array
    
    push current root into result array
    
    if theres a left node, concat the results into the result array
    if theres a right node, concat the reuslts into the reuslt array
    
    return the result array


*/

var flatten = function(root) {
  if (!root) return [];
    
  let nodes = dfs(root);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  
  return nodes[0];
};

const dfs = (node) => {
  let result = [node];
    
  result = node.left ? result.concat(dfs(node.left)) : result;
  result = node.right ? result.concat(dfs(node.right)) : result;
    
  return result;
}