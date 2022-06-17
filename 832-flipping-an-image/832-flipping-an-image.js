/**
 * @param {number[][]} image
 * @return {number[][]}
 */

var flipAndInvertImage = function(image) {
  let result = [];
  for (let row of image) {
    let newRow = [];
    row.forEach((num) => newRow.unshift(!num ? 1 : 0));
    result.push(newRow);
  }
  return result;
};