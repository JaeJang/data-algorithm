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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    const queue = [root];
    
    while (queue.length) {
        const qLen = queue.length;
        let foundX = false;
        let foundY = false;
        for (let i = 0; i < qLen; ++i) {
            const cur = queue.shift();
            if (cur.val === x) foundX = true;
            else if (cur.val === y) foundY = true;
            else if (cur.left && cur.right) {
                if (cur.left.val === x && cur.right.val === y) return false;
                if (cur.left.val === y && cur.right.val === x) return false;
            }
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        if (foundX && foundY) return true;
        if (foundX || foundY) return false;
    }
    return false;
};