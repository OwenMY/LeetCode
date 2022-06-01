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

var reverseList = function(currentNode, previousNode, isFirst = true) {
  if (currentNode === null || currentNode.next === null && isFirst) {
    return currentNode;
  }
    
  if (currentNode.next === null) {
    currentNode.next = previousNode;
    return currentNode;
  }
    
  let result = reverseList(currentNode.next, currentNode, false);
    
  if (isFirst) {
    currentNode.next = null;
  } else {
    currentNode.next = previousNode;
  }
  
  return result;
};


