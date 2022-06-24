/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let build = [];
  let trackCache = {};
    
  const backTracker = (set) => {
    let prop = build.toString();
      
    if (!trackCache[prop]) {
      result.push(build.slice());
      trackCache[prop] = true;
    }
    
    for (let i = 0; i < set.length; i++) {
      build.push(set[i]);
      backTracker(set.slice(i + 1, nums.length));
      build.pop();
    }
  };
    
  backTracker(nums);
    
  return result;
};