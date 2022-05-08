/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    
    const col = new Set();
    const posDaig = new Set();
    const negDaig = new Set();
    
    const board = Array.from({length: n} ,() => Array(n).fill("."));
    const result = [];
    const placeQueen = (r) => {
        
        if (r === n) {
            result.push(board.map(row => row.join("")));
            return;
        }
        
        for (let c = 0; c < n; ++c) {
            if (col.has(c) || posDaig.has(r+c) || negDaig.has(r-c)) continue;
            
            col.add(c);
            posDaig.add(r+c);
            negDaig.add(r-c);
            board[r][c] = 'Q';
            
            placeQueen(r + 1);
            
            col.delete(c);
            posDaig.delete(r+c);
            negDaig.delete(r-c);
            board[r][c] = '.';
        }
    }
    
    placeQueen(0);
    return result;
};


/*
Diagonal from top left to bottom right has a pattern
all cells in the same diagonal line have the same value of r + c

Diagonal from bottom left to top right has a pattern
all cells in the same diagonal line have the same value of r - c

we can only have one queen for each row and column

*/