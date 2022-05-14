/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {

    const adjs = {};
    
    const connect = (node, parent) => {
        if (!node) return;
        if (!adjs[node.val]) adjs[node.val] = [];
        if (parent) {
            adjs[parent.val].push(node.val);
            adjs[node.val].push(parent.val);
        }
        connect(node.left, node);
        connect(node.right, node);
    }
    connect(root, null);
    
    const visit = new Set();
    const queue = [target.val];
    const result = [];
    while (queue.length) {
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const cur = queue.shift();
            if (visit.has(cur)) continue;
            visit.add(cur);
            if (k === 0) {
                result.push(cur);
            } else {
                queue.push(...adjs[cur]);
            }
        }
        --k;
    }
    return result;
};

/*
[3,5,1,6,2,0,8,null,null,7,4]

3: [5, 1]
5: [3, 6, 2]
6: [5]
2: [5, 7, 4]
7: [2]
4: [2]
1: [3, 0]
0: [1]
8: [1]
*/