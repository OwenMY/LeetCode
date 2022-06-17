/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  if (height.length === 2) return Math.min(...height);
    
  let mostWater = 0;
  let frontMax = 0;
  let backMax = 0;
    
  for (let i = 0; i < height.length; i++) {
    if (!height[i] || height[i] <= frontMax) continue;
    backMax = 0;
    frontMax = height[i];
      
    for (let j = height.length - 1; j > i; j--) {
      if (height[j] > backMax) {
        backMax = height[j];
        let water = Math.min(height[i], height[j]) * (j - i);
        if (water > mostWater) mostWater = water;
      }
    }
  }
    
  return mostWater;
};