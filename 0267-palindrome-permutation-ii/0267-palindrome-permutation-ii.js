/**
 * @param {string} s
 * @return {string[]}
 */

/*
I - String
O - array of strings
C - none
E - if string is empty, return empty array
if not a palindrome, return empty array

dfs backtracking
================
state: current combo of letters, memo
basecase: when combo length is equal to n, which is input string length

Psuedocode

process the input string
if input string is length of 0 or the input string is invalid
  return an empty array

create result array
create visited
set n as processed string arrays length

create dfs function
   if path length is equal to n
     if current path is not visited
      
       create half 2 which is a reversed copy of path joined
       create permutations combining joined path, mid, and path 2
       push permutation into the result array
     
     return
     
   iterate chars array
     push current char to path
     if visited doesnt have current path
       add current path to visited
       slice current char from chars array
       invoke dfs passing in chars array, mid, path
       put slice back into chars array
     pop current char from path
       

invoke dfs function passing in chars array, and mid char as well as an empty array

return result array
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