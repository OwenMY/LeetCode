/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor, sv = null) {
  let startValue = sv || image[sr][sc];
  
  if (startValue === newColor) {
    return image;
  }
    
  image[sr][sc] = newColor;
  
  let checkDirections = [
    [sr + 1, sc],
    [sr - 1, sc],
    [sr, sc + 1],
    [sr, sc - 1]
  ];
  
  for (let coord of checkDirections) {
    if (image[coord[0]]?.[coord[1]] === startValue) {
      floodFill(image, coord[0], coord[1], newColor, startValue);
    }
  }
    
  return image;
};