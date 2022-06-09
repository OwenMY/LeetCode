/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      if (n === 0) {
        return null;
      } else if (n === 1) {
        return isBadVersion(n);
      }
    
      let mid = Math.floor(n / 2);
      let midBool = isBadVersion(mid);
      let stopPoint = midBool ? -1 : n + 1;
        
      if (midBool) {
        for (let i = mid - 1; i > stopPoint; i--) {
          if (!isBadVersion(i)) {
            return i + 1;   
          }
        }
      } else {
        for (let i = mid + 1; i < stopPoint + 1; i++) {
          if (isBadVersion(i)) {
            return i;   
          }
        }
      }
      
      return mid;
    };
};