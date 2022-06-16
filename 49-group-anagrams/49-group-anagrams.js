/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  if (strs.length <= 1) {
    return [[strs[0]]];
  }
    
  let result = [];
  let router = {};
    
  for (let str of strs) {
    let total = str.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    
    if (router[total] === undefined) {
      router[total] = result.length;
      result.push([str]);
    } else {
      let j = router[total];
      result[j].push(str);
    }
  }
 
  return result;
};