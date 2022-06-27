/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
  let cars = position.map((el, i) => [el, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
    
  let stack = [];
  
  for (let i = 0; i < cars.length; i++) {
    stack.push((target - cars[i][0]) / cars[i][1]);
    while (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();       
    }
  }
    
  return stack.length;
};