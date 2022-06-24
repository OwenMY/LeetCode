/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  if (nums.length < 2) return [nums];
    
  let result = [];
  let cur = [];
  let set = nums.slice();
  
  const backTracker = (set) => {
    for (let i = 0; i < set.length; i++) {
      let num = set.splice(i, 1);
      cur.push(num[0]);
      if (cur.length === nums.length) {
        result.push(cur.slice());
      } else {
        backTracker(set);
      }
      cur.pop();
      set.splice(i, 0, num[0]);
    } 
  };
    
  backTracker(set);
    
  return result;
};