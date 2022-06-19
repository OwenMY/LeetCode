/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
let water = 0;
let leftMax = 0;
let rightMax = 0;
let leftIndex = 0;
let rightIndex = height.length - 1;

while (leftIndex < rightIndex + 1) {
  if (leftMax < rightMax) {
    leftMax = leftMax > height[leftIndex] ? leftMax : height[leftIndex];
    water+= leftMax - height[leftIndex];
    leftIndex++;
  } else {
    rightMax = rightMax > height[rightIndex] ? rightMax : height[rightIndex];
    water+= rightMax - height[rightIndex];
    rightIndex--;
  }
}
    
  return water;
};