/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    let result = null;
    
    const dfs = (node, val1, val2) => {
      if (!node) return [];
      const currVal = node.val;
      let nodes = [];
      
      nodes = nodes.concat(dfs(node.left, val1, val2));
      nodes = nodes.concat(dfs(node.right, val1, val2));
      
      if (currVal === val1 || currVal === val2) nodes.push(currVal);
      if (!result && nodes.length === 2) {
        result = node;
      }
      
      return nodes;
    };
    
    dfs(root, p.val, q.val);
    return result;
};