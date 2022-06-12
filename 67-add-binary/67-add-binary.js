/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  let longerString = a.length > b.length ? a : b;
  let shorterString = a.length > b.length ? b : a;
    
  let longArr = longerString.split('').reverse();
  let shortArr = shorterString.split('').reverse();

  loop1:
  for (let i = 0; i < shortArr.length; i++) {
    if (shortArr[i] === '0') {
      continue;
    }
    
    for (let j = i; j < longArr.length + 1; j++) {
      switch(longArr[j]) {
          case undefined: 
            longArr.push('1');
            continue loop1;
          case '0':
            longArr[j] = '1';
            continue loop1;
          default:
            longArr[j] = '0';
            break;
      }
    }
  }
  
  return longArr.reverse().join('');
};