/**
 * @param {number} turnedOn
 * @return {string[]}
 */

/*
I - number
O - array of strings
C - none
E - if that number is 0

Backtracking with dfs
----------------------
if the hours are greater than 12, its not valid
if the minutes are greater than 59, its not valid

These two must be handled seperately ^^
state of the hours,
state of the minutes, if minutes is zero, set minutes to '00'

if current digits selected are equal to turnedOn, join and push combo into result array



States: 
 -> What has already been used, shift the array
 -> current combo

Psuedocode
if turnedOn is 0, return an empty array
create result array

create backtrack helper function (turnedOn, index, combo) 
  if combo length is equal to turnedOn
    create a new string, with combo.hours combined with a ':' and combo.minutes
    push that string into the result array
    return
    
  iterate until 10 is reached, setting i to index
    if i is less than 4
      add current hour to combo hour
      increase combo length by 1
      
      if combo hour is less than 12
        recurse passing in i plus 1 for index
        
      subtract current hour from combo hour
      decrease combo length by 1
      
    otherwise 
      add current minutes to combo minutes
      increase combo length by 1
      
      if combo minutes is less than 60
        recurse passing in i plus 1 and combo
        
      subtract current minutes from combo minutes
      decrement combo length by 1
      
return result array


      
create Hours array
create minutes array
*/

var readBinaryWatch = function(turnedOn) {
  if (!turnedOn) return ["0:00"];
    
  const clock = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  let result = [];
    
  const dfs = (index, combo) => {
    if (combo.length === turnedOn) {
      const solution = `${combo.hours}:${combo.minutes.toString().padStart(2, '0')}`;
      result.push(solution);
      return;
    }
      
    for (let i = index; i < 10; i++) {
      combo.length++;
        
      if (i < 4) {
        const currHour = clock[i];
        combo.hours+= currHour;
        
        if (combo.hours < 12) {
          dfs(i + 1, combo);
        }
        
        combo.hours-= currHour;
      } else {
        const currMinutes = clock[i];
        combo.minutes+= currMinutes;
        
        if (combo.minutes < 60) {
          dfs(i + 1, combo);  
        }
        
        combo.minutes-= currMinutes;
      }
        
      combo.length--;
    }
  };
    
  dfs(0, {hours: 0, minutes: 0, length: 0});
  
  return result;
};