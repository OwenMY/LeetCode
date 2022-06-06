/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  } else if (nums.length === 0 || nums.length === 1 && nums[0] !== target) {
    return -1;
  }
    
  let start = 0;
  let end = nums.length - 1;
  let mid = null;
    
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
 
  return -1;
};