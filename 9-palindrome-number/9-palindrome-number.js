/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  let stringNum = x + '';
  let nums = stringNum.split('');
    
  while (nums.length > 1) {
    if (nums.pop() !== nums.shift()) {
      return false;
    }
  }
    
  return true;
};