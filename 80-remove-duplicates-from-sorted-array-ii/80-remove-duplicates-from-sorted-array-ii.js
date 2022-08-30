/**
 * @param {number[]} nums
 * @return {number}
 */

/*
I - nums array
O - number
C - none
E - none

sliding window

Psuedocode
if nums length is 1, return 1
create count variable
create currNum and set to first element of array
create currNumCount and set to 1

iterate the nums array with i and j starting j from the 2nd index
  if current num at j is equal to currNum
    increment currNumCount
    if currNumCount is greater than 2
      set num at j to null
    otherwise
      increment i by 1
      increment count by 1
      set currNum to current num at j
      set currNumCount to 1
      save current Num at i to a variable
      save current Num at j to a variable    
  otherwise if current num at j is greater than currNum
    increment i
    increment count by 1
    set currNum to current num at j
    set currNumCount to 1
    save current Num at i to a variable
    save current Num at j to a variable
    swap nums
    


return count
*/

var removeDuplicates = function(nums) {
    if (nums.length === 1) return 1;
    let count = 1;
    let currNum = nums[0];
    let currNumCount = 1;
    
    for (let i = 0, j = 1; j < nums.length; j++) {
        if (nums[j] === currNum) {
          currNumCount++;
          if (currNumCount > 2) {
            nums[j] = null;
          } else {
            i++
            count++;
            let numI = nums[i];
            let numJ = nums[j];
            nums[i] = numJ;
            nums[j] = numI;
          }
        } else if (nums[j] > currNum) {
            i++
            count++;
            currNum = nums[j];
            currNumCount = 1;
            let numI = nums[i];
            let numJ = nums[j];
            nums[i] = numJ;
            nums[j] = numI;
        }
    }
    
    return count;
};