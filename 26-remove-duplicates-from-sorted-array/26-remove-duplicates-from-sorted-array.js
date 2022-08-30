/**
 * @param {number[]} nums
 * @return {number}
 */

/*
I - array of nums
O - number
C - none
E - if array length is 1

two pointer

Psuedocode
is nums length is 1, return 1
create count starting at 1

iterate the nums array with i and j starting at 2nd index
  if current num at j is equal to current num at i
    set num at j to be null
  otherwise
    increment i
    save num at i to a variable
    save num at j to a variable
    swap number
    increment count

return count
*/

var removeDuplicates = function(nums) {
  if (nums.length === 1) return 1;
  let count = 1;
    
  for (let i = 0, j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      nums[j] = null;
    } else if (nums[i] < nums[j]) {
      i++;
      count++;
      let nullNum = nums[i];
      let swapNum = nums[j];
      nums[i] = swapNum;
      nums[j] = nullNum;
    }
  }
  return count;
};