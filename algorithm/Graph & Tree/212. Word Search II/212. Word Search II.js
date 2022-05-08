class TrieNode {
    constructor() {
        this.children ={}
        this.stoppable = false;
    }
    
    addWord(word) {
        let cur = this;
        for (let i = 0; i < word.length; ++i) {
            if (!cur.children[word[i]]) {
                cur.children[word[i]] = new TrieNode();
            }
            cur = cur.children[word[i]]
        }
        cur.stoppable = true;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const ROW = board.length;
    const COL = board[0].length;
    const result = new Set();
    const visited = new Set();
    const root = new TrieNode();
    
    const dfs = (i, j, node, word) => {
        if (i < 0 || j < 0 ||
           i >= ROW || j >= COL ||
           visited.has(`${i},${j}`) ||
           node.children[board[i][j]] === undefined) {
            return;
        }
        
        node = node.children[board[i][j]];
        word += board[i][j];
        if (node.stoppable) {
            result.add(word);
        }
        
        visited.add(`${i},${j}`);
        dfs(i + 1, j, node, word);
        dfs(i, j + 1, node, word);
        dfs(i - 1 , j, node, word);
        dfs(i, j - 1, node, word);
        visited.delete(`${i},${j}`);
    }
    
    for (let word of words) {
        root.addWord(word);
    }
    
    for (let i = 0; i < ROW; ++i){
        for (let j = 0; j < COL; ++j) {
            dfs(i, j, root, '')
        }
    }
    
    return Array.from(result);
};