/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  let sorted1 = nums1.sort((a, b) => a - b);
  let sorted2 = nums2.sort((a, b) => a - b);
    
  let set = new Set();
  let result = [];
  let i = 0;
  let j = 0;
    
  while (sorted1[i] !== undefined && sorted2[j] !== undefined) {
    if (sorted1[i] === sorted2[j]) {
      let prevSize = set.size;
      set.add(sorted1[i]);
      if (set.size !== prevSize) {
        result.push(sorted1[i]);
      }
      i++;
      j++;
    } else if (sorted1[i] < sorted2[j]) {
      i++;
    } else {
      j++;
    }
  }
    
  return result;
};