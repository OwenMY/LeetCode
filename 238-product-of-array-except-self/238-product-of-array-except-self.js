/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
  if (nums.every( num => num === 0)) {
    return nums;
  } else if (nums.indexOf(0) !== nums.lastIndexOf(0)) {
    let result = nums.slice();
    return result.fill(0);
  }

  let total = getTotalProduct(nums);
  let hasZero = nums.includes(0) ? true : false;
  let result = [];
    
  for (let num of nums) {
    if (hasZero && num !== 0) {
      result.push(0);
    } else if (hasZero && num === 0) {
      result.push(total);
    } else {
      result.push(total / num);
    }
  }
    
  return result;
};

const getTotalProduct = (nums) => {
  let result = 1;
  
  for (let num of nums) {
    if (num === 0) {
      continue;
    }
      
    result*= num;
  }
    
  return result;
};


