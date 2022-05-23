/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {    
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
      continue;
    }
      
    let topOfStack = stack[stack.length - 1];
      
    switch(topOfStack) {
      case '(':
        if (s[i] === ')') {
           stack.pop();
        } else {
          return false;
        }
            
        break;
      case '[':
        if (s[i] === ']') {
          stack.pop();
        } else {
          return false;
        }
            
        break;
      case '{':
        if (s[i] === '}') {
          stack.pop();
        } else {
          return false;
        }
            
        break;
      default:
        return false;
      }
    }
    
  return stack.length ? false : true;
};