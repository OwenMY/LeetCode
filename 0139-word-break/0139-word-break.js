/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
I - string, array of strings
O - boolean
C - none
E - is input string is empty, if word dict is empty

dfs backtracking
=================
states: 
start number
count number
memo

basecase: when all combinations are check

aggregate: boolean

Psuedocode
if s length is 0 or word dict is empty, return false
create memo

create dfs helper function
  if start is equal to string length
    if count is greater than or equal to dictionary length
      return true
    otherwise
      return false
      
  if memo has index in it, return memoized value
  
  create answer and set to false
  get slice of string using start
  
  iterate the dictionary
    if slice starts with current word
      invoke dfs adding start plus current words length
      if the dfs is true
        set ans to true
  
  set start to whatever value ans is
  return ans
    

return dfs helper function invoked passing in 0
*/

var wordBreak = function(s, wordDict) {
  if (!s.length || !wordDict.length) return false;
    
  const memo = {};
    
  const dfs = (start) => {
    if (start === s.length) {
      return true;
    }
      
    if (start in memo) return memo[start];
      
    let ans = false;
    const subString = s.slice(start);
      
    for (let word of wordDict) {
      if (subString.startsWith(word)) {
        const result = dfs(start + word.length);
        if (result) {
          ans = result;
        }
      }
    }
      
      
    memo[start] = ans;
      
    return ans;
  };
    
  return dfs(0);
};