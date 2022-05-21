/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {    
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let restOfNums = nums.slice(i + 1, nums.length);
    if (restOfNums.includes(difference)) {
      return [i, nums.indexOf(difference, i + 1)];
    }
  }

  return [];
};

