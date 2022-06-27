/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

/*
I - number, 2 arrays
O - number
C - none
E - very large inputs, zero and one

Psuedocode
create result starting at 0

create stack array with first car

create cars array by mapping one of the arrays
sort cars
create result at one

iterate the cars array starting at 1 
  if speed of current car is less than or equal speed of car in stack
    replace stack with current car
    increment result
  otherwise if greater
    create sum1 as its position plus speed
    create sum2 as its position plus speed
    while sums are less than target
      if sums are equal
        push into stack
        break;
      increment both sums by their speed
    if any of the sums are greater than target
      replace stack with sum2
    
return result
*/

var carFleet = function(target, position, speed) {
  let cars = position.map((el, i) => [el, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
    
  let stack = [];
  
  for (let i = 0; i < cars.length; i++) {
    stack.push((target - cars[i][0]) / cars[i][1]);
    while (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop();       
    }
  }
    
  return stack.length;
};