/**
 * @param {number} x
 * @return {number}
 */

/*
I - integer
O - integer
C - none
E - if x null or number with no sqr root

binary search a range of number

between 1 and x is the range

boundary based

Pseudocode
if x is falsey return x

create start at 1
create end at x
create sqrt and set it to null


while start is less than or equal to end
  create mid by getting average of start and end
  find product by multiplying mid by 2
  
  if product is equal to x
    set sqrt to mid
    break;
  otherwise if product is greater than x
    set sqrt to mid
    set end to equal mid minus 1
  otherwise
    set sqrt to mid
    set start to equal mid plus 1
    
  
   return sqrt
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