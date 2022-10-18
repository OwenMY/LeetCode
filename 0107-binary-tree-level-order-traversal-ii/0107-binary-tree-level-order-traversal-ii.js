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
I - root
O - array of arrays
C - none
E - if no root is passed in

bfs
-----

Pseudocode
if root is null, return root

create result array
create queue with root node inside

while theres stuff in the queue
  find n which is length of queue
  create nums array
  
  iterate until n is reached
    shift the current element out of queue
    push current number into nums array
    if theres a left node, push it into queue
    if theres a right node, push it into queue
  
  unshift nums array into the result array
  
return result array


*/

var levelOrderBottom = function(root) {
  if (!root) return [];
    
  let result = [];
  let queue = [root];
    
  while (queue.length) {
    const n = queue.length;
    let nums = [];
      
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      
      nums.push(node.val);
        
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
      
    result.unshift(nums);
  }
    
  return result;
};