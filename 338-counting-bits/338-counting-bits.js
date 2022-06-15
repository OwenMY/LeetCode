/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
  let result = [];
    
  for (let k = 0; k < n + 1; k++) {
    result = memo(result, k);
  }
    
  return result;
};

const memoization = () => {
  let cache = {};
    
  return (ans, i) => {
    if (i === 0) {
      cache[i] = ['0'];
      ans[i] = 0;
      return ans;
    } else if (i === 1) {
      cache[i] = ['1'];
      ans[i] = 1;
      return ans;
    }

    let prev = cache[i - 1].slice();
    let count = 0;
    let flippedZero = false;
      
    for (let j = prev.length - 1; j > -1; j--) {
      if (!flippedZero) {
        if (j === 0) {
          prev[j] = '0';
          prev.unshift('1');
          count++;
        } else if (prev[j] === '1') {
          prev[j] = '0';
        } else {
          prev[j] = '1';
          count++;
          flippedZero = true;
        }
      } else {
        count+= (prev[j] === '1' ? 1 : 0);
      }
    }
    
    cache[i] = prev;
    ans[i] = count;
      
    return ans; 
  };
};

const memo = memoization();