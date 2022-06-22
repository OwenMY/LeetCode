/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  if (s.length < 2) return false;
    
  let stack = []; 
  
  for (let char of s) {
    switch(char) {
      case '(':
        stack.push(char);
        break;
      case '{':
        stack.push(char);
        break;
      case '[':
        stack.push(char);
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else { 
          return false;
        }
        break;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          return false;
        }
        break; 
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          return false;
        }
        break; 
      default:
    }
  }
  
  return stack.length ? false : true;
};



