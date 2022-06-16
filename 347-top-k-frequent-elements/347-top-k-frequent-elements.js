/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
  if (nums.length <= 1) {
    return nums;
  }
  
  let count = [];
  let router = {};
    
  for (let num of nums) {
    if (router[num] === undefined) {
      router[num] = count.length;
      count.push([1, num]);
    } else {
      let j = router[num];
      count[j][0]++;
    }
  }
    
  count.sort((a, b) => b[0] - a[0]);
  let result = [];
    
  for (let i = 0; i < k; i++) {
    result.push(count[i][1]);
  }

  return result;
};