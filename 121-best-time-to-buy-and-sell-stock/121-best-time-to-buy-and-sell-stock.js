/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0;
  }
    
  let largestProfit = 0;
  let cheapestPrice = prices[0];
    
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < cheapestPrice) {
      cheapestPrice = prices[i];
    } else if (prices[i] - cheapestPrice > largestProfit) {
      largestProfit = prices[i] - cheapestPrice;
    }
  }
  
  return largestProfit;
};