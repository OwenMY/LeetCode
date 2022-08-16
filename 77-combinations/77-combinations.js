/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/*
I - 2 numbers
O - array of arrays
C - none
E - none

memoization
dfs

states:
-> current combination of numbers
-> numbers to choose from

Base case: if number has been memoized, dont count it 

Psuedocode
create dfs helper function (curr, numsLeft, memo)
  convert curr to string
  if curr is in memo, return false
  if curr length is equal to k, return true
  
  iterate the numsLeft array
    add curr number to curr
    recurse
    if recurse result is true
      push curr into result
    remove curr number from curr
  
create result array
create digits array

iterate until n is reached
  push i into digits
  
invoke dfs with digits array

return result.

*/




var combine = function(n, k) {
  const dfs = (nums, curr) => {
    let prop = curr.toString();
    if (memo[prop]) return false;
    if (curr.length === k) return true;
      
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      let isValid = dfs(nums.slice(i + 1), curr);
      if (isValid) {
        let res = curr.toString();
        memo[res] = true;
        result.push(curr.slice());
      }
      curr.pop(); 
    }
    
    return false;
  };
      
  let memo = [];
  let result = [];
  let digits = [];
  
  for (let i = 1; i <= n; i++) {
    digits.push(i);
  }
  
  dfs(digits, []);
    
  return result;  
};