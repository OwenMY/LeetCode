/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if (!root) return root;
    
    const bfs = (node: Node): Node => {
      let queue: Node[] = [node];
        
      while (queue.length) {
        const n: number = queue.length;
          
        for (let i = 0; i < n; i++) {
          const currNode: Node = queue.shift();
            
          if (i === n - 1) {
              currNode.next = null;
          } else {
              currNode.next = queue[0];
          }
            
          if (currNode.left) queue.push(currNode.left);
          if (currNode.right) queue.push(currNode.right);
        }
      }
        
      return node;
    }
    
    return bfs(root);
};