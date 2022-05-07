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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    const dfs = (node, subNode) => {
        if (!node && !subNode) return true;
        if ((node && !subNode) || (!node && subNode)) return false;
        
        if (isIdentical(node, subNode)) return true;
        
        const left = dfs(node.left, subNode);
        const right = dfs(node.right, subNode);
        
        return left || right;
    }
    
    return dfs(root, subRoot);
};

function isIdentical (root, subRoot) {
    const dfs = (node, subNode) => {
        if (!node && !subNode) return true;
        if ((node && !subNode) || (!node && subNode)) return false;
        
        if (node.val === subNode.val) {
            const left = dfs(node.left, subNode.left);
            const right = dfs(node.right, subNode.right);
            return left && right;
        }
        return false;
    }
    return dfs(root, subRoot);
}