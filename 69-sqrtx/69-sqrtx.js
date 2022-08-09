/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
  if (!x) return x;
    
  let start = 1; 
  let end = x;
  let sqrt = null;
    
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let product = mid * mid;
    
    if (product === x) {
      sqrt = mid;
      break;
    } else if (product < x) {
      sqrt = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
    
  return sqrt;
};