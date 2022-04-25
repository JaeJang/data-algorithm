/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRottingV2 = function(grid) {
    const queue = [];
    
    const ROW = grid.length;
    const COL = grid[0].length;
    let numOfFresh = 0 ;
    
    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            if (grid[i][j] === 2) {
                queue.push([i,j]);
            } else if (grid[i][j] === 1) ++numOfFresh;
        }
    }
    
    const visitCell = (r, c) => {
        if (r < 0 || c < 0 
            || c === COL || r === ROW 
            || grid[r][c] !== 1)
            return;
        --numOfFresh;
        grid[r][c] = 2;
        queue.push([r,c]);
    }
    
    let count = 0;
    while (queue.length && numOfFresh > 0) {
        console.log(queue)
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const [r, c] = queue.shift();
            visitCell(r - 1, c);
            visitCell(r, c - 1);
            visitCell(r, c+ 1);
            visitCell(r+ 1, c);
        }
        ++count;
    }
    
    return numOfFresh === 0 ? count : -1;
};

 var orangesRotting = function(grid) {
    const queue = [];
    const visited = new Set();
    
    const ROW = grid.length;
    const COL = grid[0].length;
    let numOfFresh = 0 ;
    let numOfRotten = 0;
    
    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            if (grid[i][j] === 2) {
                queue.push([i,j]);
                visited.add(keyToString([i,j]));
            } else if (grid[i][j] === 1) ++numOfFresh;
        }
    }
    
    const visitCell = (r, c) => {
        if (r < 0 || c < 0 
            || c === COL || r === ROW 
            || visited.has(keyToString([r,c]))
            || grid[r][c] !== 1)
            return;
        ++numOfRotten;
        grid[r][c] = 2;
        queue.push([r,c]);
        visited.add(keyToString([r,c]));
    }
    
    let count = 0;
    while (queue.length) {
        const qLen = queue.length;
        for (let i = 0; i < qLen; ++i) {
            const [r, c] = queue.shift();
            visitCell(r - 1, c);
            visitCell(r, c - 1);
            visitCell(r, c+ 1);
            visitCell(r+ 1, c);
        }
        console.log(queue)
        ++count;
    }
    
    if (numOfFresh !== numOfRotten) return -1;
    return count !== 0 ? count - 1 : 0;
};

function keyToString(key) {
    return `${key[0]},${key[1]}`;
}
