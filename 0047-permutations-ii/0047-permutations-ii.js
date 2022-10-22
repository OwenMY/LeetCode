/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
  if (!nums.length) return [];
    
  let result = [];
  const n = nums.length;
  const memo = {};
  
  const dfs = (path) => {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
      
    for (let i = 0; i < nums.length; i++) {
      const currNum = nums.splice(i, 1)[0];
      path.push(currNum);
      const key = path.toString();
        
      if (!memo[key]) {
        memo[key] = true;;
        dfs(path);
      }
      
      path.pop();
      nums.splice(i, 0, currNum);
    }
  };
  
  dfs([]);
    
  return result;
};