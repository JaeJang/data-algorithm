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
 var isValidBST = function(root) {
    const result = [];
    
    inorder(root, result);
    
    for (let i = 1; i < result.length; ++i) {
        if (result[i-1] >= result[i]) return false;
    }
    
    return true;
    
};

// in-order traversal makes sorted list
function inorder(node, result) {
    if (!node) {
        return;
    }
    
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result)
}


var isValidBSTV2 = function(root, floor = Number.NEGATIVE_INFINITY, ceiling = Number.POSITIVE_INFINITY) {
    if (!root) {
        return true;
    }
    if (root.val <= floor || root.val >= ceiling) {
        return false;
    }
    
    return isValidBST(root.left, floor, root.val)
        && isValidBST(root.right, root.val, ceiling)  
};