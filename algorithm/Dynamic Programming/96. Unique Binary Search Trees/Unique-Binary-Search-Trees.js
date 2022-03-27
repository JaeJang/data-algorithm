/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    const trees = Array(n+1).fill(0);
    trees[0] = 1;
    trees[1] = 1;
    trees[2] = 2;
    
    for (let i = 3; i <= n; ++i) {
        for (let j = 0; j < i; ++j) {
            trees[i] += trees[j] * trees[i-j-1];
        }
    }
    return trees[n];
    
};

/**
 * 
n=4

      1                  2                 3                 4
     / \                / \               / \               / \
tree[0]*tree[3] + tree[1]*tree[2] + tree[2]*tree[1] + tree[3]*tree[0]

 */