/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  const result = [[]];
    
  const backTracker = (build = [], k = 0) => {
    for (let i = k; i < nums.length; i++) {
      build.push(nums[i]);
      result.push(build.slice());
      backTracker(build, i + 1);
      build.pop();
    }
  };
    
  
  backTracker();
    
  return result;
};