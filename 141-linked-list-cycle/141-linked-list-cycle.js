/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  if (head === null) {
    return false;
  } else if (head.next === null) {
    return false
  }

  let valTracker = [];
  let currNode = head;
    
  while (currNode) {
    if (valTracker.includes(currNode)) {
      return true;
    }
    
    valTracker.push(currNode);
    currNode = currNode.next;
  }
    
  return false;
};