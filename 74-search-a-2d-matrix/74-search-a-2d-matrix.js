/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
    
  for (let row of matrix) {
    if (target >= row[0] && target <= row[row.length - 1]) {
      let start = 0;
      let end = row.length - 1;
      let mid = null;
        
      while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (row[mid] === target) {
          return true;
        } else if (target < row[mid]) {
          end = mid - 1;  
        } else if (target > row[mid]) {
          start = mid + 1;
        }
      }
      return false;
    }
  }
    
  return false;
};