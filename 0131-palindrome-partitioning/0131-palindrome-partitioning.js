/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) return false;
      
    left++;
    right--;
  }
    
  return true;
};


var partition = function(s) {
  if (!s.length) return [];
    
  let result = [];
    
  const dfs = (start, path) => {
    if (start === s.length) {
      result.push(path.slice());
      return;
    }
     
    let combo = '';
      
    for (let i = start; i < s.length; i++) {
      combo+= s[i];
      if (isPalindrome(combo)) {
        path.push(combo.slice());
        dfs(i + 1, path);
        path.pop();
      }
    }
  }
  
  dfs(0, []);
    
  return result;
};