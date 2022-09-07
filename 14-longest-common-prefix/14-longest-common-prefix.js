/**
 * @param {string[]} strs
 * @return {string}
 */

/*
I- array of strings
O- string
C- none
E- if array is empty

Psuedocode
if array length is empty, return empty string
create common prefix string at set to zero
create currentPrefix and set to current string
create shortestString and set to infinite

iterate the strs array
  if current string length is less than shortestString
    set shortestString to current string

iterate with i and j until j reaches shortestString length, increment i
  if i is equal to strs length
    set common prefix to current prefix
    set i to -1
    increment j
    continue
  
  add current char to current prefix
  if current string does not start with current prefix
    break;


return common prefix vairable
*/

var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let commonPrefix = '';
    let currentPrefix = strs[0][0];
    let shortestString = Infinity;
    
    strs.forEach(str => {
        if (str.length < shortestString) shortestString = str
    });
    
    for (let i = 0, j = 0; j < shortestString.length; i++) {
      if (i === strs.length) {
          commonPrefix = currentPrefix;
          j++;
          i = -1;
          currentPrefix+= strs[0][j];
      } else if (!strs[i].startsWith(currentPrefix)) {
          break;
      }
    }
    
    return commonPrefix;
};