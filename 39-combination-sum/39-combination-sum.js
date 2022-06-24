/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const build = {nums:[], sum:0};
    
  const backTracker = (k) => {
    for (let i = k; i < candidates.length; i++) {
      build.nums.push(candidates[i]);
      build.sum+= candidates[i];
        
      if (build.sum > target) {
        build.sum-= candidates[i];
        build.nums.pop();
        return;
      } else if (build.sum === target) {
        result.push(build.nums.slice());
      } else {
        backTracker(i);
      }
        
      build.nums.pop();
      build.sum-= candidates[i];
    }
  };
  
  backTracker(0);
    
  return result;
};