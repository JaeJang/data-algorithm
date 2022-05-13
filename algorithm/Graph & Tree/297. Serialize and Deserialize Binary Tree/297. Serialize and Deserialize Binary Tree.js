/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    const tree = [];
    
    const dfs = (node) => {
        if (!node) {
            tree.push(null);
            return;
        }
        
        tree.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    
    return JSON.stringify({tree: tree});
}
/*
[1,2,n,n,3,4,n,n,5,n,n]

*/


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const {tree} = JSON.parse(data);
    let index = 0;
    const dfs = () => {
        if (tree[index] === null) {
            ++index;
            return null;
        }
        const node = new TreeNode(tree[index++]);
        
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */