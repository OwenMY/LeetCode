/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
  if (!nums.length) {
    return null;
  } else if (nums.length === 1) {
    return 1;
  }
    
    
  nums.sort((a, b) => a - b);
    
  let count = 1;
  let longest = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (Math.abs(nums[i -1] - nums[i]) > 1) {
      longest = count > longest ? count : longest;
      count = 1;
    } else {
      count++;
    }
  }
  
   return count > longest ? count : longest;
};