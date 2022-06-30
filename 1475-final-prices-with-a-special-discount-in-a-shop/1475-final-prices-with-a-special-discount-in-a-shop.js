/**
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function(prices) {
  let result = prices.slice();
  let stack = [[prices[0], 0]];
    
  for (let i = 1; i < prices.length; i++) {
    while (prices[i] <= stack[stack.length - 1]?.[0] && stack.length) {
      let prevPrice = stack.pop();
      result[prevPrice[1]]-= prices[i];
    }
      
    stack.push([prices[i], i]);
  }
    
  return result;
};