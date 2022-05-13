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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    let dequeue = [root];
    let fromLeft = true;
    
    while (dequeue.length) {
        const tmp = [];
        const subResult = [];
        while (dequeue.length) {
            let cur;
            if (fromLeft) {
                cur = dequeue.shift();
                if (cur.left) tmp.push(cur.left);
                if (cur.right) tmp.push(cur.right);
            } else {
                cur = dequeue.pop();
                if (cur.right) tmp.unshift(cur.right);
                if (cur.left) tmp.unshift(cur.left);
            }
            subResult.push(cur.val);            
        }
        result.push(subResult);
        fromLeft = !fromLeft;
        dequeue = tmp;
    }
    return result;
};