/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
  if (!s1.length && !s2.length) {
    return true;
  } else if (!s1.length || !s2.length) {
    return false;
  } 
    
  let shortString = s1;
  let longString = s2;
    
  let charBank = {length:0};
  
  shortString.split('').forEach((char) => {
    if (charBank[char]) charBank[char]++;
    else charBank[char] = 1;
  });
  
  for (let i = 0, j = 0; i < longString.length;) {
    if (charBank.length === shortString.length) return true;
    if (charBank[longString[i]] === undefined) {
      i++;
      while (j < i) {
        if (charBank[longString[j]] === undefined) {
          j++;
          continue;
        } else {
          charBank[longString[j]]++;
          j++; 
        }
      }
      charBank.length = 0;
    } else if (charBank[longString[i]] === 0) {
      charBank[longString[j]]++;
      charBank.length--;
      j++;
    } else {
      charBank[longString[i]]--;
      charBank.length++;
      i++;
    }
  }
    
    
  return charBank.length === shortString.length;
};