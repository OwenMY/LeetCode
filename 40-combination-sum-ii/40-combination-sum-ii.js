/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  
  const backTracker = (set, build, sum) => {
    if (sum > target) return;
    if (sum === target) {
      result.push(build);
      return;
    }
      
    for (let i = 0; i < set.length; i++) {
      if (set[i] !== set[i - 1]) {
        let pack = build.slice();
        pack.push(set[i]);
        backTracker(set.slice(i + 1), pack, sum + set[i]);
      }
    }
  };
    
  backTracker(candidates.slice(), [], 0);
    
  return result;
};