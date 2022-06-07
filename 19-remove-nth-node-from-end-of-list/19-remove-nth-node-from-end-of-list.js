/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function(head, n) {
if (head.next === null) {
  return null;
}
    
let currentNode = head;
let nodes = [];
 
while (currentNode) {
  nodes.push(currentNode);
  currentNode = currentNode.next;
}

nodes.splice(nodes.length - n, 1);

for (let i = 0; i < nodes.length; i++) {
  if ( i === nodes.length - 1) {
    nodes[i].next = null;
    break;
  }
  nodes[i].next = nodes[i + 1];
}

return nodes[0];
};