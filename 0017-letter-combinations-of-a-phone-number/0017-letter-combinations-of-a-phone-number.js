/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    const phoneChars =  {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    
    let result = [];
    const n = digits.length;
    
    const dfs = (combo, index) => {
      const currDigit = digits[index];
      for (let char of phoneChars[currDigit]) {
        combo.push(char);
        if (combo.length === n) {
          result.push(combo.join(''));
        } else {
          dfs(combo, index + 1);
        }
          
        combo.pop();
      }
    };
    
    dfs([], 0);
    
    return result;
};