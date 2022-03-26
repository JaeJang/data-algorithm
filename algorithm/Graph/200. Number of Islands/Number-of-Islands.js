/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let counter = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j)
                ++counter;    
            }    
        }
    }
    
    return counter
};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== "1") return;
    grid[i][j] = '#';
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
    
}