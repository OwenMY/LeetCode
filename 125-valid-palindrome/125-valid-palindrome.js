/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
  if (s.length < 2) {
    return true;
  }
    
  const stringParser = (string) => {
    let result = [];
    let formattedString = string.toLowerCase();
    
    for (let char of formattedString) {
      let charCode = char.charCodeAt(0);
        
      if (charCode >= 65 && charCode <= 90) {
        result.push(char);
      } else if (charCode >= 97 && charCode <= 122) {
        result.push(char);
      } else if (charCode >= 48 && charCode <= 57) {
        result.push(char)
      }
    }
      
    return result;
  };
    
  let stringArr = stringParser(s);
  
  while (stringArr.length > 1) {
    if (stringArr[0] === stringArr[stringArr.length - 1]) {
      stringArr.pop();
      stringArr.shift();
    } else {
      return false;
    }
  }
    
  return true;
};