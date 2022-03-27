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
 var isSymmetricV2 = function(root) {
    return helper(root.left, root.right)
    
};

function helper(left, right) {
    
    if ((!left && right) || (left && !right)) return false;
    if (!left && !right) return true;
    
    if (left.val !== right.val) return false;
    
    return helper(left.left, right.right) && helper(left.right, right.left);
}

var isSymmetricV3 = function(root) {
    if (!root.left && !root.right) return true;    
   if (!root.left || !root.right) return false;
   if (root.left.val !== root.right.val) return false;
   let stack = [root.left, root.right];
   
   while (stack.length) {
       let right = stack.pop();
       let left = stack.pop();
       
       if ((left && !right) || (!left && right)) return false;
       if (!left && !right) continue;
       
       if (left.val !== right.val) return false;
       
       stack.push(left.left)
       stack.push(right.right)
       stack.push(left.right)
       stack.push(right.left)
   }
   return true;
};

 var isSymmetric = function(root) {
    
    if (!root.left && !root.right) return true;    
    if (!root.left || !root.right) return false;
    if (root.left.val !== root.right.val) return false;
    let queue = [root.left, root.right]

    while (queue.length) {
        if (queue.length % 2 !== 0) return false;
        let start = 0;
        let end = queue.length - 1;
        while (start < end) {
            if ((queue[start].left && !queue[end].right) || (!queue[start].left && queue[end].right)) return false;
            if (queue[start].left?.val !== queue[end].right?.val) return false;
            if (queue[start].right?.val !== queue[end].left?.val) return false;
            ++start;
            --end;
        }
        let newQueue = []
        for (let node of queue) {
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        queue = newQueue;
    }
    return true;
    
};