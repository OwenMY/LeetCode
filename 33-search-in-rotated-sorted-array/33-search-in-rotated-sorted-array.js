/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  if (nums.length <= 5) {
    return searchSmallArray(nums, target);
  } else if (nums[0] === target) {
    return 0;
  }
    
  let pivot = getPivot(nums, target);
  
  if (nums[pivot] === target) return pivot;
    
  let numSides = [nums.slice(0, pivot), nums.slice(pivot)];
  let side = target > numSides[0][0] ? 0 : 1;
    
  let start = 0;
  let end = numSides[side].length - 1;
    
  while (start <= end) {
    let mid = Math.floor((start + end) /2);
    let currNum = numSides[side][mid];
    if (currNum === target) {
      return !side ? mid : numSides[0].length + mid;
    }
      
    if (target < currNum) {
      end = mid - 1;
    } else if (target > currNum) {
      start = mid + 1;
    }
  }
    
  return -1;  
};

const getPivot = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = null;
  let pivot = Infinity;
  let pivotIndex = null;
  
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] < pivot) {
      pivot = nums[mid];
      pivotIndex = mid;
    }
    
    if (nums[mid] <= nums[end]) {
      end = mid - 1;
    } else if (nums[mid] >= nums[start]) {
      start = mid + 1;
    }
  }
  
  return pivotIndex;
};

const searchSmallArray = (nums, target) => {
  let indexFound = null;
    
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      indexFound = i;
      break;
    }
  }
    
  return indexFound === null ? -1 : indexFound;
}