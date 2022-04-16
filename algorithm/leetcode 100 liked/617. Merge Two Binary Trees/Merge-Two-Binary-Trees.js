/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTreesV2 = function(root1, root2) {
    
    if (!root1) return root2;
    if (!root2) return root1;
    
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
};

 var mergeTrees = function(root1, root2) {
    
    if (!root1 && !root2) return null;
    const newRoot = new TreeNode((root1?.val || 0) + (root2?.val || 0));
    mergeLeft(root1?.left, root2?.left, newRoot);
    mergeRight(root1?.right, root2?.right, newRoot);
    
    return newRoot;
};
    
function mergeLeft(node1, node2, newNode) {
    if (!node1 && !node2) return;
    if (node1 && !node2) {
        newNode.left = node1;   
    } else if (!node1 && node2) {
        newNode.left = node2;   
    } else {
        newNode.left = new TreeNode(node1.val + node2.val);
        mergeLeft(node1.left, node2.left, newNode.left);
        mergeRight(node1.right, node2.right, newNode.left);
    }
}

function mergeRight(node1, node2, newNode) {
    if (!node1 && !node2) return;
    if (node1 && !node2) {
        newNode.right = node1;   
    } else if (!node1 && node2) {
        newNode.right = node2;   
    } else {
        newNode.right = new TreeNode(node1.val + node2.val);
        mergeLeft(node1.left, node2.left, newNode.right);
        mergeRight(node1.right, node2.right, newNode.right);
    }
}