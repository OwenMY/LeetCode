/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
  if (!tokens.length) return null;
  let stack = [];
    
  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();
      
      switch(token) {
        case '+':
          stack.push(num1 + num2);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '/':
          stack.push(Math.trunc(num2 / num1));
          break;
        case '*':
          stack.push(num1 * num2);
          break;
        default:
      }  
    }
  }

  return stack[0];  
};