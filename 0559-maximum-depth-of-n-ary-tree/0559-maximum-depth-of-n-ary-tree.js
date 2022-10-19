/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */


/*
I - root
O - number
C - none
E - null root

bfs
----------

Psuedocode
if root is null, return null

create queue with root inside
create depth starting at 0

while theres stuff in the queue
  find which is queue length
  increment depth
  
  iterate until n
    dequeue queue
      push all nodes children into the queue

return depth 
*/

var maxDepth = function(root) {
  if (!root) return root;
  
  let queue = [root];
  let depth = 0;
    
  while (queue.length) {
    const n = queue.length;
    depth++;
      
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      queue.push(...node.children); 
    }
  }
    
  return depth;
};