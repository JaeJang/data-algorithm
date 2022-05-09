// Union Find
var findRedundantConnectionV2 = function(edges) {
    const parents = [0];
    
    for (let i = 1; i <= edges.length; ++i) {
        parents[i] = i;
    }

    const findParent = (x) => {
        const parent = parents[x];
        if (x === parent) return x;
        parents[x] = findParent(parent)
        return parents[x];
    }
    
    const union = (x, y) => {
        const xParent = findParent(x);
        const yParent = findParent(y);
        
        if (xParent === yParent) return false;
        
        if (xParent < yParent) {
            parents[yParent] = xParent;
        } else {
            parents[xParent] = yParent;
        }
        return true;
    }
    
    for (let [x, y] of edges) {
        if (!union(x, y)) {
            return [x, y];
        }
    }
    return [];
};


/*
[[3,4],[1,2],[2,4],[3,5],[2,5]]
parents = [1,2,3,4,5]

[3,4]
parents = [1,2,3,3,5]

[1,2]
parents = [1,1,3,3,5]

[2,4]
parents = [1,1,1,1,5]

[3,5]
parents = [1,1,1,1,1]

[2,5]
parents = [1,1,1,1,1] -> already connected


---
parents = [1,2,3];

[1,2]
parents = [1,1,3];

[1,3]
parents = [1,1,1];

---
[[1,2],[2,3],[3,4],[1,4],[1,5]]
parents = [1,2,3,4,5]

[1,2]
1Parent = 1
2Parent = 2
parents = [1,1,3,4,5]

[2,3]
2Parent = 1
3Parent = 3
parents = [1,1,1,4,5]

[3,4]
3Parent = 1
4Parent = 4
parents = [1,1,1,1,5]

[1,4]
1Parent = 1
4Parent = 1
parents = [1,1,1,1,5] -> already connected

*/


class DefaultListMap {
    constructor() {
        this.map = {}
    }
    
    get(key) {
        if (this.map[key] === undefined) {
            this.map[key] = [];
        }
        return this.map[key];
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const graph = new DefaultListMap();
    let visited;
    
    const isAlreadyConnected = (x, y) => {
        if (x === y) return true;
        
        for (let xAdj of graph.get(x)) {
            if (!visited.has(xAdj)) {
                visited.add(xAdj);
                if (isAlreadyConnected(xAdj, y)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    for (let edge of edges) {
        visited = new Set();
        const [x, y] = edge;
        
        if (isAlreadyConnected(x, y)) {
            return edge;
        }
        graph.get(x).push(y);
        graph.get(y).push(x);
    }
    return [];
};
