/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// without set
 var solveV2 = function(board) {
    const ROW = board.length;
    const COL = board[0].length;
    
    for (let i = 0; i < COL; ++i){
        if (board[0][i] === 'O') dfs(board, 0, i);
        if (board[ROW-1][i] === 'O') dfs(board, ROW-1, i);
    }
    
    for (let i = 0; i < ROW; ++i){
        if (board[i][0] === 'O') dfs(board, i, 0);
        if (board[i][COL-1] === 'O') dfs(board, i, COL-1);
    }

    for (let i = 0; i < ROW; ++i) {
        for (let j = 0; j < COL; ++j) {
            if (board[i][j] === 'O') board[i][j] = 'X'
            else if (board[i][j] === 'T') board[i][j] = 'O'
        }
    }
};

function dfsV2(board, i, j) {
    if (i < 0 || j < 0 
        || i === board.length || j === board[0].length 
        || board[i][j] !== 'O')
        return;
    
    board[i][j] = 'T'

    dfs(board, i - 1, j);
    dfs(board, i, j - 1);
    dfs(board, i + 1, j);
    dfs(board, i, j + 1);
}

 var solve = function(board) {
    const visit = new Set();
    
    const ROW = board.length;
    const COL = board[0].length;
    
    for (let i = 0; i < COL; ++i){
        if (board[0][i] === 'O') dfs(board, 0, i, visit);
        if (board[ROW-1][i] === 'O') dfs(board, ROW-1, i, visit);
    }
    
    for (let i = 0; i < ROW; ++i){
        if (board[i][0] === 'O') dfs(board, i, 0, visit);
        if (board[i][COL-1] === 'O') dfs(board, i, COL-1, visit);
    }

    for (let i = 1; i < ROW - 1; ++i) {
        for (let j = 1; j < COL - 1; ++j) {
            if (board[i][j] === 'O' && !visit.has(`${i},${j}`)) {
                board[i][j] = 'X'
            }
        }
    }
};

function dfs(board, i, j, visit) {
    if (i < 0 || j < 0 
        || i === board.length || j === board[0].length 
        || visit.has(`${i},${j}`) 
        || board[i][j] !== 'O')
        return;
    
    visit.add(`${i},${j}`);

    dfs(board, i - 1, j, visit);
    dfs(board, i, j - 1, visit);
    dfs(board, i + 1, j, visit);
    dfs(board, i, j + 1, visit);
}