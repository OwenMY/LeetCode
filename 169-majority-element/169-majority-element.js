/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
    
  let counter = {};
    
  for (let num of nums) {
    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      counter[num]++;
    }
  }
  
  let result = null;
  let highestCount = -Infinity;    

  for (let num in counter) {
    if (counter[num] > highestCount) {
      highestCount = counter[num];
      result = num;
    }
  }
  return result;
};