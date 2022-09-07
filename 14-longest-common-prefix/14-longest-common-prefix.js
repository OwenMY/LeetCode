/**
 * @param {string[]} strs
 * @return {string}
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