/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function (root, depth = 0, nodes = []) {
  if (!root) {
    return [];
  }

  nodes[depth] = root.val;

  rightSideView(root.left, depth + 1, nodes);
  rightSideView(root.right, depth + 1, nodes);

  return nodes;
};