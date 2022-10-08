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
 * @return {number[][]}
 */

/*
I - Node
O - Array of arrays of numbers
C - none
E - root is null

bfs
-----------
state: strings left/right for direction

Psuedocode
if root is null, return root

create result array
create direction starting at 'left'
create queue starting with root

while the queue has a node in it
  find n which is current length of queue
  create values array
  
  iterate until n is reached
    shift a node off of queue
    
    if direction is left 
      push current nodes value into queue
    otherwise
      unshift current nodes value into queue
      
    if theres a left child, push child into queue
    if theres a right child, push child into queue
    
  push values array into result array
  direction is set to right if left, otherwise set to left
    
return result array
*/

var zigzagLevelOrder = function(root) {
  if (!root) return [];
    
  let result = [];
  let direction = 'left';
  let queue = [root];
    
  while (queue.length) {
    const n = queue.length;
    let values = [];
      
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
        
      if (direction === 'left') {
        values.push(node.val);
      } else {
        values.unshift(node.val);
      }
        
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(values);
    direction = direction === 'left' ? 'right' : 'left';
  }
  
  return result;
};