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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    
    if (!root) return [];
    
    const result = [];
    
    helper(root, 0, result);
    
    return result;
};

function helper(node, level, result) {
    if (!node) return;
    
    if (!result[level]) result[level] = [node.val];
    else result[level].push(node.val);
    
    helper(node.left, level + 1, result);
    helper(node.right, level + 1, result);
}