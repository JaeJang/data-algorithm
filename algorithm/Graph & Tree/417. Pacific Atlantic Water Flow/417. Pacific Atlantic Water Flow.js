/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    const result = [];
    const ROW = heights.length;
    const COL = heights[0].length;
    
    const pacificVisit = new Set();
    const atlanticVisit = new Set();
    
    for (let i = 0; i < COL; ++i) {
        dfs(heights, 0, i, pacificVisit, heights[0][i]);
        dfs(heights, ROW - 1, i, atlanticVisit, heights[ROW-1][i]);
    }
    
    for (let i = 0; i < ROW; ++i) {
        dfs(heights, i, 0, pacificVisit, heights[i][0]);
        dfs(heights, i, COL - 1, atlanticVisit, heights[i][COL-1]);
    }
    
    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            const key = `${i},${j}`;
            if (pacificVisit.has(key) && atlanticVisit.has(key)) {
                result.push([i,j]);
            }
        }
    }
    return result;
};

function dfs(heights, i, j, visit, prevHeight) {
    if (i < 0 || j < 0
       || i === heights.length || j === heights[0].length
       || visit.has(`${i},${j}`)
       || heights[i][j] < prevHeight)
        return;
    
    visit.add(`${i},${j}`);
    
    dfs(heights, i - 1, j, visit, heights[i][j]);
    dfs(heights, i, j - 1, visit, heights[i][j]);
    dfs(heights, i + 1, j, visit, heights[i][j]);
    dfs(heights, i, j + 1, visit, heights[i][j]);
}


