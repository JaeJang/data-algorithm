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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    let count = 0;
    const helper = (node, target) => {
        if (!node) return;
        if (node.val === target) ++count;
        helper(node.left, target - node.val);
        helper(node.right, target - node.val);
    }
    const dfs = (node, target) => {
        if (!node) return;
        
        helper(node, target)
        dfs(node.left, target);
        dfs(node.right, target);
    }
    
    dfs(root, targetSum);
    return count;
};