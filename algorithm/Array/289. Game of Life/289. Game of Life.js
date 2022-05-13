/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {

    const directions = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    const getNearLives = (i, j) => {
        let numOfLives = 0;
        for (let [r, c] of directions) {
            if (i+r < 0 || j+c < 0 || i+r === board.length || j+c == board[0].length) continue;
            if (board[i+r][j+c] === 1 || board[i+r][j+c] === -1) ++numOfLives;
        }
        return numOfLives;
    }
    
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            const nearLives = getNearLives(i,j);
            if (board[i][j] === 0) {
                if (nearLives === 3) {
                    board[i][j] = 2;    
                }
            } else if (nearLives < 2 || nearLives > 3) {
                board[i][j] = -1;
            }
        }
    }
    
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            if (board[i][j] === -1) board[i][j] = 0;
            else if (board[i][j] === 2) board[i][j] = 1;
        }
    }
};