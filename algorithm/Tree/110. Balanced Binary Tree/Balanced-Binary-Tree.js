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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    const dfs = (node) => {
        //base
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        if (left === -1 || right === -1 || Math.abs(left - right) > 1)
            return -1;
        
        return 1 + Math.max(left,right);
    }
    
    return dfs(root) !== -1;
};
/*



*/