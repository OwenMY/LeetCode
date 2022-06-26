/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {
  let result = Array.from(temperatures, x => x = 0);
  let stack = [];
    
  for (let currDay = 0; currDay < temperatures.length; currDay++) {
    let currTemp = temperatures[currDay];
    if (currTemp > stack[stack.length - 1]?.[0]) {
      while (currTemp > stack[stack.length - 1]?.[0]) {
        let prevTemp = stack.pop();
        result[prevTemp[1]] = currDay - prevTemp[1];
      }
    }
    stack.push([currTemp, currDay]);    
  }
    
  while (stack.length) {
    let temp = stack.pop();
    result[temp[1]] = 0;
  }
    
  return result;
};