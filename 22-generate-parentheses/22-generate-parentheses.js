/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  let result = [];
    
  const backTrackerv2 = (left, right, par = '') => {
    if (right > left || left > n ) return;
    if (right + left === n * 2) result.push(par);
    
    backTrackerv2(left + 1, right, par + '(');
    backTrackerv2(left, right + 1, par + ')');
  };
    
  backTrackerv2(0, 0);
    
  return result;
};