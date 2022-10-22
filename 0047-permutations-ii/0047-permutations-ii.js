/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
I - array of nums
O - array of arrays of nums
C - none
E - constant repeating

backtracking dfs 
========================
states: visited set, current combination
basecase: when length of nums is reached in execution context

Psuedocode
if nums is empty, return an empty array

create result array
create memo which is a new map
find n which is nums length

create dfs function
  if start index is equal to nums length
    push copy of path into result array
    return
  
  iterate input array starting at input start num and ending at nums array length plus 1
    if cache does not contain current number at index 
      push current number into path array
      add current number and index to cache
      invoke dfs passing in i plus 1 and path
      pop current number from cache

invoke dfs function
return result array
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