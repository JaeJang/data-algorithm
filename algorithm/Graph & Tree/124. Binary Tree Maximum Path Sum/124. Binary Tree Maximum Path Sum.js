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
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = -Infinity;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        left = left >= 0 ? left : 0;
        right = right >= 0 ? right : 0
        
        max = Math.max(max, left + right + node.val);
        return node.val + Math.max(left, right);
    }
    dfs(root);
    return max;
};