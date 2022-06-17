/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  } else if (nums.every((num) => num === 0)) {
    return [[0, 0, 0]];
  }
    
  nums.sort((a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    else if (nums[i - 1] === nums[i]) continue;
    let lo = i + 1;
    let hi = nums.length - 1;
      
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum > 0) {
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        result.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
      }
    }
  }
    
  return result;
};