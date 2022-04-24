/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraphV2 = function(node) {
    if (!node) return null;
    
    return dfs(node, new WeakMap());
};

function dfs(node, map) {
    if (map.has(node)) return map.get(node);
    
    map.set(node, new Node(node.val));
    const curNewNode = map.get(node);
    for (let neighbor of node.neighbors) {
        curNewNode.neighbors.push(dfs(neighbor, map));
    }
    return curNewNode;
}

 var cloneGraph = function(node) {
    if (!node) return null;
    const queue = [node];
    const map = new WeakMap();
    
    while (queue.length) {
        
        const curNode = queue.shift();
        if (!map.has(curNode)) map.set(curNode, new Node(curNode.val));
        const newCurNode = map.get(curNode);
        
        for (let neighbor of curNode.neighbors) {
            
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor);
            }
            newCurNode.neighbors.push(map.get(neighbor));
        }
    }
    return map.get(node)
};