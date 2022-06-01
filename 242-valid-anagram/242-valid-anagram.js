/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
    
  let sArr = s.split('');
  let tArr = t.split('');
    
  for (let char of tArr) {
    let charIndex = sArr.indexOf(char);
    if (charIndex !== -1) {
      sArr[charIndex] = false;
    } else {
      return false;
    }
  }
  
  return true;
};