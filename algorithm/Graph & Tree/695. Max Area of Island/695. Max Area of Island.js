/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            max = Math.max(max, dfs(grid, i, j))
        }
    }
    
    return max;
};

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== 1) {
        return 0;
    }
    grid[i][j] = '#';
    const up = dfs(grid, i - 1, j);
    const left = dfs(grid, i, j - 1);
    const down = dfs(grid, i + 1, j);
    const right = dfs(grid, i, j + 1);
    
    return up + left + down + right + 1;
}