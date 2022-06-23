/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {
  if (!s.length && !t.length) {
    return true;
  } else if (!s.length || !t.length) {
    return false;
  }
    
  let arrS = s.split('');
  let arrT = t.split('');
    
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === '#' && i) {
      arrS.splice(i - 1, 2);
      i-= 2;
    } else if (arrS[i] === '#' && !i) {
      arrS.shift();
      i--;
    }
  }
    
  for (let i = 0; i < arrT.length; i++) {
    if (arrT[i] === '#' && i) {
      arrT.splice(i - 1, 2);
      i-= 2;
    } else if (arrT[i] === '#' && !i) {
      arrT.shift();
      i--;
    }
  }
    
  return arrT.join('') === arrS.join('');
};