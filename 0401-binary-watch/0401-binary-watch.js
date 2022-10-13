/**
 * @param {number} turnedOn
 * @return {string[]}
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