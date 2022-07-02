/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function(piles, h) {
  piles.sort((a, b) => a - b);
    
  let result = null;
  let start = 0;
  let end = piles.at(-1);
  let mid = null;
    
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let search = kokoCheck(piles, h, mid);
    
    switch(search) {
      case 'bottom half':
        result = mid;
        end = mid - 1;
        break;
      case 'upper half':
        start = mid + 1;
        break;
      default:
    }
  }

  return result;
};

let kokoCheck = (piles, h, mid) => {
  let eatRate = mid;
  let hoursAcc = 0;
    
  for (let i = 0; i < piles.length; i++) {
    let hours = Math.ceil(piles[i] / eatRate);
    hoursAcc+= hours;
    if (hoursAcc > h) {
      return 'upper half';
      break;
    }
  }
  
  return 'bottom half';
}