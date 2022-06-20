/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
  let result = 0;
  let change = k;
  let currChar = s[0];
  let count = 1;
  let next = [s[0], 0, false];
    
  for (let i = 1; i < s.length; i++) {
    if (currChar === s[i]) {
      count++;
      result = result > count ? result : count;
    } else {
      if (!next[2]) {
        next = [s[i], i, true];
      }
      
      if (change) {
        change--;
        count++;
        result = result > count ? result : count;
      } else {
        change = k;
        count = 1;
        i = next[1];
        currChar = next[0];
        next[2] = false; 
      }
    }
  }
  
  
  let countTotal = count + change;
  if (countTotal >= s.length) {
    return result > s.length ? result : s.length;
  }
    
  return result > countTotal ? result : countTotal;
};

