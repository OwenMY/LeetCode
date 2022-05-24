/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) {
    return list1;
  } else if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }
    
  let linkedList1 = list1;
  let linkedList2 = list2;
      
  let lowestValue = null;

  if (linkedList1.val <= linkedList2.val) {
    lowestValue = linkedList1.val;
    linkedList1 = linkedList1.next;
  } else {
    lowestValue = linkedList2.val;
    linkedList2 = linkedList2.next;
  }

  let resultList = { val: lowestValue, next: null };
  let head = resultList;
    
  while (linkedList1 !== null || linkedList2 !== null) {  
    if (linkedList1 === null) {
        resultList.next = linkedList2;
        resultList = linkedList2;
        break;
    } else if (linkedList2 === null) {
        resultList.next = linkedList1;
        resultList = linkedList1;
        break;
    }
      
    if (linkedList1.val <= linkedList2.val) {
      resultList.next = linkedList1;
      resultList = linkedList1;
      linkedList1 = linkedList1.next;
    } else {
      resultList.next = linkedList2;
      resultList = linkedList2;
      linkedList2 = linkedList2.next;
    }
  }
    
  return head;    
};
