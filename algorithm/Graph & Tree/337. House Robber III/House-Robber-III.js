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
 var rob = function(root) {
    const dfs = node => {
        // [withRoot, withoutRoot]    
        if (!node) return [0,0];

        const left = dfs(node.left);
        const right = dfs(node.right);

        return [node.val + left[1] + right[1], Math.max(...left) + Math.max(...right)];
    };
    
    return Math.max(...dfs(root));
};