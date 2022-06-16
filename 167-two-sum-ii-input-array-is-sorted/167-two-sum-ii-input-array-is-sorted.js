/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[k] > target) break;
      if (numbers[i] + numbers[k] === target) {
        return [i + 1, k + 1];
      }
    }
  }
};