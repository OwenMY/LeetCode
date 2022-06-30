/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function(nums) {
  if (nums.length < 2) return true;
    
  let result = [];
  let direction = null;
    
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      direction = 'incrementing';
      break;
    } else if (nums[i] < nums[i - 1]) {
      direction = 'decrementing';
      break;
    }
  }
    
  switch (direction) {
    case 'incrementing':
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
          return false;
        }
      }
      break;
    case 'decrementing':
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
          return false;
        }
      }
      break;
    default:
      return true;      
  }
    
  return true;
};