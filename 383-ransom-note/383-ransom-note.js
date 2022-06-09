/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
  let magArr = magazine.split('');
    
  for (let char of ransomNote) {
    let charIndex = magArr.indexOf(char);
    if (charIndex === -1) {
      return false;
    }
    
    magArr[charIndex] = false;
  }
    
  return true;
};
    
    