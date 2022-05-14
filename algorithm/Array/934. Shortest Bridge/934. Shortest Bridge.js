/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function(grid) {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const visit = new Set();
    const queue = [];
    const findFirstIsland = (r, c) => {
        if (r < 0 || c < 0 ||
           r === grid.length || c === grid[r].length ||
           grid[r][c] === 0 ||
           visit.has(`${r},${c}`)) {
            return;
        }
        queue.push([r,c]);
        visit.add(`${r},${c}`);
        for (let dir of directions) {
            findFirstIsland(r + dir[0], c + dir[1])
        }
    }

    let firstFound = false;
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] === 1) {
                findFirstIsland(i, j);
                firstFound = true;
                break;
            }
        }
        if (firstFound) break;
    }

    let bridges = 0;
    while(queue.length) {
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const cur = queue.shift();
            for (let dir of directions) {
                const newR = cur[0] + dir[0];
                const newC = cur[1] + dir[1];
                if (newR < 0 || newC < 0||
                   newR === grid.length || newC === grid[0].length ||
                   visit.has(`${newR},${newC}`))
                    continue;
                visit.add(`${newR},${newC}`);
                queue.push([newR,newC]);
                if (grid[newR][newC] === 1) return bridges;
            }
        }
        ++bridges;
    }
    return bridges;
};