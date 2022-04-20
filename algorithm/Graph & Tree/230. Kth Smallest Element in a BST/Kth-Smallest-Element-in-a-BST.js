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
 * @param {number} k
 * @return {number}
 */
 var kthSmallestV2 = function(root, k) {
    
    const stack = [];
    
    while (true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (--k === 0) return root.val;
        
        root = root.right;
    }
};

 var kthSmallest = function(root, k) {
    
    const inOrder = (node) => {
        if (!node) return -1;
        const left = inOrder(node.left);
        
        if (left !== -1) return left;
        if (--k === 0) return node.val;
        
        const right = inOrder(node.right);

        return right;
    }
    
    return inOrder(root);
};