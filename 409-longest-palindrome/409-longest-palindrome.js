/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
  if (s.length === 1) {
    return 1;
  }
    
  let counter = {};
    
  for (let char of s) {
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }
    
  let result = 0;
  let oddCharFound = false;
  let values = Object.values(counter).sort((a, b) => b - a);
    
  for (let val of values) {
    if (val % 2 === 1) {
      if (oddCharFound) {
        result+= val - 1;
      } else {
        oddCharFound = true;
        result+= val;
      }
    } else {
      result+= val;
    }
  }
    
  return result;
};