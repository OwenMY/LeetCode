/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

/*
I - array of letters, target string
O - a single char string
C - none
E - letters wrap around

Psuedocode
set start
set end
set boundary_index to 0

while start is less than or equal to end
  find mid
  if charcode at mid is greater than charcode of target
    set boundary_index to mid
    set set end to mid - 1
  otherwise 
    set start to mid + 1 
    
return boundary_index

*/

var nextGreatestLetter = function(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let boundary = letters[0];
    
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (letters[mid].charCodeAt(0) > target.charCodeAt(0)) {
      boundary = letters[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
    
  return boundary;
};