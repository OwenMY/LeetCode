/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
  if (!s.length || !t.length || s.length < t.length) {
    return '';
  } else if (s.length === 1 && t.length === 1) {
    return s[0] === t[0] ? s : '';
  }
    
  let result = {length: Infinity}; 
  let comparator = {length: t.length};
  let window = {length: 0};
    
  for (let char of t) {
    if (!comparator[char]) comparator[char] = 1 
    else comparator[char]++; 
    window[char] = 0;
  }
    
  for (let i = 0, j = 0; i < s.length; i++) {
    if (comparator[s[i]]) {
      window[s[i]]++;
      if(window[s[i]] <= comparator[s[i]]) window.length++;
        
      if (window.length === comparator.length) {
        while (window.length === comparator.length) {
          if (window[s[j]]) {
            window[s[j]]--;
            if (window[s[j]] < comparator[s[j]]) window.length--;
          }
          j++;
        }
        let subString = s.substring(j - 1, i + 1);
        result = subString.length < result.length ? subString : result;
      }
    }
  }
    
  return result.length === Infinity ? '' : result;
};