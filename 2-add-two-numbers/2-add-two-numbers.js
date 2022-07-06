/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let nodeList1 = [];
  let nodeList2 = [];
  let currNode1 = l1;
  let currNode2 = l2;
    
  while (currNode1 || currNode2) {
    if (currNode1) {
      nodeList1.unshift(currNode1);
      currNode1 = currNode1.next;
    }
      
    if (currNode2) {
      nodeList2.unshift(currNode2);
      currNode2 = currNode2.next;
    }
  }
  

  let head = null;
  let currNode = null;
  let remainder = 0;  
  
  for (let i = -1; nodeList1.at(i) || nodeList2.at(i) || remainder; i--) {
    let val1 = nodeList1.at(i)?.['val'] || 0;
    let val2 = nodeList2.at(i)?.['val'] || 0;
    let sum = val1 + val2 + remainder + '';
      
    let num1 = Number(sum[0]);
    let num2 = Number(sum[1]);
    let node = isNaN(num2) ? new ListNode(num1) : new ListNode(num2); 
    remainder = isNaN(num2) ? 0 : num1;
        
    if (!head) {
      head = node;
      currNode = node;
      continue;
    }
    
    currNode.next = node;
    currNode = node;
  }
    
  return head;
};