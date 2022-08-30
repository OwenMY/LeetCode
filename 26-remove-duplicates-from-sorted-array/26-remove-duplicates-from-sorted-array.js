/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  if (nums.length === 1) return 1;
  let count = 1;
    
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      nums[j] = null;
    } else if (nums[i] < nums[j]) {
      i++;
      count++;
      let nullNum = nums[i];
      let swapNum = nums[j];
      nums[i] = swapNum;
      nums[j] = nullNum;
    }
  }
  return count;
};