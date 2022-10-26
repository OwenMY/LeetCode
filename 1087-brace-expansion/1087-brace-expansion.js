/**
 * @param {string} s
 * @return {string[]}
 */


/*
I - string
O - array of strings
C - none
E - if string is empty, return empty array

dfs backtracking
=================
states: current options, current combo
basecase: when options array is empty, push string combo into result


Psuedocode
create parseString helper function
  create options array
  
  iterate string
    if current char is a curley brace
      create new array
      create isFound and set to false
      increment i
      
      while isFound is false
        if current char is equal to end curley brace
          set isFound to true
          break;
        otherwise if current char is not a comma
          push current char into  new array
        increment i
     push new array into options array
     
  otherwise 
    push char into new array, push new array into the options array

if the input string is empty, return an empty array

create result array
create char tree using parseString

create dfs function
  if options array is empty
    push the joining of path into the result array
    return
    
  get current charNode by shifting options array
  iterate the options array
    push current char into path
    invoke dfs passing in options and char
    pop path array
  
  unshift current charNode back into options
  return

invoke dfs function (options, [])

return result
*/

const createCharTree = (s) => {
  let options = [];
    
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      i++;
      let chars = [];
      let isFound = false;
        
      while (!isFound) {
        if (s[i] === '}') {
          isFound = true;
          break;
        } else if (s[i] !== ',') {
          chars.push(s[i]);
        }
          
        i++;
      }
      chars.sort();
      options.push(chars);
    } else {
      options.push([s[i]]);
    }
  }
    
  return options;
};

var expand = function(s) {
  if (!s.length) return [];
  let result = [];
  let charTree = createCharTree(s);
    
  const dfs = (tree, path) => {
    if (!tree.length) {
      result.push(path.join(''));
      return;
    }
      
    let treeNode = tree.shift();
    
    for (let i = 0; i < treeNode.length; i++) {
      path.push(treeNode[i]);
      dfs(tree, path);
      path.pop();
    }
      
    tree.unshift(treeNode);
    return;
  };
    
  dfs(charTree, []);
  return result;
};