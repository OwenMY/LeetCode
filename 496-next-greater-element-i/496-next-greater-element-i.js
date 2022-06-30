/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
  let result = nums1.slice().fill(-1);
  let hashTracker = {};
  let stack = [];
    
  nums1.forEach((num, i) => hashTracker[num] = i);
    
  for (let i = 0; i < nums2.length; i++) {
    while (nums2[i] > stack[stack.length - 1]?.[0] && stack.length) {
      let prevNum = stack.pop();
      result[prevNum[1]] = nums2[i]; 
    }
      
    if (hashTracker[nums2[i]] !== undefined) {  
      stack.push([nums2[i], hashTracker[nums2[i]]]);
    }    
  }
    
  return result;
};