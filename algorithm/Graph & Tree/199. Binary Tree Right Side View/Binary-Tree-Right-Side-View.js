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
 * @return {number[]}
 */
 var rightSideViewV2 = function(root) {
    if (!root) return [];
    
    const result = [];
    let queue = [root];
    
    while (queue.length) {
        let rightSide = null;
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const cur = queue.shift();
            rightSide = cur;
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        result.push(rightSide.val);
    }
    
    return result;
};

 var rightSideView = function(root) {
    if (!root) return [];
    
    const result = [];
    let queue = [root];
    
    while (queue.length) {
        const tmpQueue = [];
        let cur;
        while (queue.length) {
            cur = queue.shift();
            if (cur.left) tmpQueue.push(cur.left);
            if (cur.right) tmpQueue.push(cur.right);
        }
        result.push(cur.val);
        queue = tmpQueue;
    }
    
    return result;
};