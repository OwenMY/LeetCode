/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  let result1 = [];
  let result2 = [];
    
  const dfs = (root, tree) => {
    if (!root) {
      if (tree === 1) {
        result1.push(null);
      } else {
        result2.push(null);
      }
        
      return;
    }
      
    if (tree === 1) {
      result1.push(root.val);
    } else {
      result2.push(root.val);
    }
      
    dfs(root.left, tree);
    dfs(root.right, tree);
      
    return;
  }
  
  dfs(p, 1);
  dfs(q, 2);
  
  let isSame = true;
  
  result1.forEach((num1, i) => {
    if (num1 !== result2[i]) isSame = false;
  });
    
  return isSame;
};


