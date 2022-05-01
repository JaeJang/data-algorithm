/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const seen = new Set();
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
           if (dfs(board, i, j, word, seen)) return true;
        }
    }
    return false;
};

function dfs(board, i, j, word, seen) {
    if (!word.length) return true;
    
    if (i < 0 || j < 0 
        || i === board.length || j === board[0].length 
        || board[i][j] !== word[0]
        || seen.has(`${i},${j}`))
        return false;
    seen.add(`${i},${j}`);
    const newWord = word.substring(1);
    const result = dfs(board, i + 1, j, newWord, seen)
        || dfs(board, i, j + 1, newWord, seen)
        || dfs(board, i - 1, j, newWord, seen)
        || dfs(board, i, j - 1, newWord, seen)
    
    seen.delete(`${i},${j}`);
    return result;
}