/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
  if (nums.length < 2) return nums;
  
  let queue = [];
  let result = [];
    
  for (let i = 0; i < k; i++) {
    if (nums[i] > nums[queue[0]]) {
      queue = [i];
    } else {
      while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(i);
    }
  }
  
  result.push(nums[queue[0]]);
    
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > nums[queue[0]]) {
      queue = [i];
    } else {
      while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(i);
    }
    
    while (queue.length > 1 && queue[0] <= i - k) {
      queue.shift();
    } 
      
    result.push(nums[queue[0]]);
  }
    
  return result;
};