/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
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