/**
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function(n) {
  if (n <= 0) {
    return 0;
  }
  
  let result = 5;
    
  for (let i = 2; i < n + 1; i++) {
    result = memo(i);
  }
    
  return result;
};

const standard = ['a', 'e', 'i', 'o', 'u'];

const arrMemo = () => {
  let cache = [0, [1, 1, 1, 1, 1, 5], [5, 4, 3, 2, 1, 15]];
    
  return (n) => {
    if (cache[n]) {
      return cache[n][5];
    }
      
    let a = cache[n - 1][5];
    let b = a - cache[n - 1][0];
    let c = b - cache[n - 1][1];
      
    let result = [a, b, c, n, 1];
    let total = result.reduce((a, b) => a + b);
    result.push(total);
      
    cache[n] = result;
      
    return cache[n][5];
  }
};

const memo = arrMemo();