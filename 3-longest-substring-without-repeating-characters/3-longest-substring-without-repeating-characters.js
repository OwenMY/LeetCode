/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;
  let result = 0;
  let hashCache = {length:0};
  let i = 0;
  let j = 0;
    
  for (let i = 0, j = 0; i < s.length; i++) {
    if (hashCache[s[i]] === undefined || hashCache[s[i]] < j) {
      hashCache[s[i]] = i;
      hashCache.length++;
      result = result > hashCache.length ? result : hashCache.length;
    } else {
      j = hashCache[s[i]];
      hashCache[s[i]] = i;
      hashCache.length = i - j;
    }
  }
    
  return result;
};