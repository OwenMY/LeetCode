/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function(root) {
  if (!root) return root;
    
  const bfs = () => {
    let queue = [root];
      
    while (queue.length) {
      const n = queue.length;
        
      for (let i = 0; i < n; i++) {
        const currentElement = queue.shift();
        
        if (i === n - 1) {
          currentElement.next = null;
        } else {
          currentElement.next = queue[0];
        }
          
        if (currentElement.left) queue.push(currentElement.left);
        if (currentElement.right) queue.push(currentElement.right);
      }
    }
    return root;
  };
  bfs();
  return root;
};