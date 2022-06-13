/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
  if (!head || !head.next) {
    return head;
  }
  
  let nodeStorage = [];
  let currNode = head;
    
  while (currNode) {
    nodeStorage.push(currNode);
    currNode = currNode.next;
  }
    
  let isOdd = nodeStorage.length % 2 === 1 ? true : false; 
    
  if (isOdd) {
    return nodeStorage[Math.ceil(nodeStorage.length / 2) - 1]; 
  } else {
    return nodeStorage[Math.floor(nodeStorage.length / 2)];
  }
};