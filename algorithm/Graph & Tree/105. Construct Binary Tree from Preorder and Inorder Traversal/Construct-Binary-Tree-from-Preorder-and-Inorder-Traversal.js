/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    const helper = (start, end) => {
        if (start > end) return null;
        
        const root = new TreeNode(preorder[preorderIndex++]);
        
        root.left = helper(start, inorderIndexMap[root.val] - 1);
        root.right = helper(inorderIndexMap[root.val] + 1, end);
        
        return root;
    }
    
    const inorderIndexMap = new Array(preorder.length);
    for (let i = 0; i < inorder.length; ++i) {
        inorderIndexMap[inorder[i]] = i;
    }
    
    let preorderIndex = 0;
    
    return helper(0, preorder.length - 1)
};
