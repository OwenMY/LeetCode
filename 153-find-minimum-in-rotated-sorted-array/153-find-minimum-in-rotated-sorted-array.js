/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let leastNum = nums.at(-1);
    
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums.at(mid) < nums.at(-1)) {
      leastNum = nums.at(mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
    
  return leastNum;
};