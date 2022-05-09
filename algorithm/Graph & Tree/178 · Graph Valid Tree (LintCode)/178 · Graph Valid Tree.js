// Using Union Find
export class Solution {
  /**
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree(n, edges) {
    if (edges.length + 1 !== n) return false;

    const parents = [];
    for (let i = 0; i <= n; ++i) {
      parents[i] = i;
    }
    const findParent = (x) => {
      if (x === parents[x]) return x;

      parents[x] = findParent(parents[x]);
      return parents[x];
    };

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
    };

    for (let [x, y] of edges) {
      if (!union(x, y)) {
        return false;
      }
    }
    return true;
  }
}


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

// Using DFS
export class Solution {
  /**
   * @param n: An integer
   * @param edges: a list of undirected edges
   * @return: true if it's a valid tree, or false
   */
  validTree(n, edges) {
    if (edges.length + 1 !== n) return false;

    const graph = new DefaultListMap();
    const visited = new Set();
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

    for (let [x, y] of edges) {
      visited.clear();
      if (isAlreadyConnected(x, y)) return false;

      graph.get(x).push(y);
      graph.get(y).push(x);
    }
    return true;
  }

}