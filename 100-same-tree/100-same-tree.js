/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*
I - 2 roots
O - boolean
C - none
E - none

Base case: is where the root node is null, return null
To traverse: there must be child nodes

Psuedocode
create result 1 array
create result 2 array

create dfs function (node, num) 
  if root is null
    if num is 1,
      push null into result1's array
    otherwise 
      push null into result2's array
    return null
  
  if num is 1 
    push current val into result1's array
  otherwise
    push current val into result2's array
    
  invoke dfs on rightside 
  invoke dfs on left side

invoke dfs on root1
invoke dfs on root2

forEach the result1 array
  check of current element is equal to result2s element
  return false if not equal
return true

*/


var isSameTree = function(p, q) {
  let result1 = [];
  let result2 = [];
    
  const dfs = (root, tree) => {
    if (!root) {
      if (tree === 1) {
        result1.push(null);
      } else {
        result2.push(null);
      }
        
      return;
    }
      
    if (tree === 1) {
      result1.push(root.val);
    } else {
      result2.push(root.val);
    }
      
    dfs(root.left, tree);
    dfs(root.right, tree);
      
    return;
  }
  
  dfs(p, 1);
  dfs(q, 2);
  
  let isSame = true;
  
  result1.forEach((num1, i) => {
    if (num1 !== result2[i]) isSame = false;
  });
    
  return isSame;
};


