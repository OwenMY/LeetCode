/**
 * @param {string} s
 * @return {string[]}
 */

const containsPalindromes = (string) => {
  const result = {
    chars: [],
    mid: '',
    isValid: true
  };
  
  const count = {};
    
  for (let char of string) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
      
    if (!(count[char] % 2)){
      result.chars.push(char);
    }
  }
    
  let odds = 0;
    
  for (let char in count) {
    if (count[char] % 2) {
      odds++;
      result.mid = char;
    }
  }
    
  if (odds > 1) result.isValid = false;
    
  return result;
};

const reverseString = (string) => {
  let result = '';
    
  for (let char of string) {
    result = char + result;
  }
    
  return result;
};

const generatePalindromes = function(s) {
  const stringStats = containsPalindromes(s);
    
  if (!s.length || !stringStats.isValid) return [];
    
  let result = [];
  const visited = {};
  const n = stringStats.chars.length;
    
  const dfs = (chars, mid, path) => {
    if (path.length === n) {
      const half2 = reverseString(path);
      const permutation = path + mid + half2;
      result.push(permutation);
      return;
    }
      
    for (let i = 0; i < chars.length; i++) {     
      const key = path + chars[i];
        
      if (!visited[key]) {
        visited[key] = true;
        const half1 = chars.slice(0, i);
        const half2 = chars.slice(i + 1);
        const availableChars = half1 + half2;
          
        dfs(availableChars, mid, path + chars[i]);  
      }
    }
  };
    
  dfs(stringStats.chars.join(''), stringStats.mid, '');
    
  return result;
};