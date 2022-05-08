var Node = function(key) {
    this.key = key;
    this.children = {};
    this.stoppable = false;
}


var WordDictionary = function() {
    this.root = new Node('');
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    
    for (let i = 0; i < word.length; ++i) {
        if (!current.children[word[i]]) {
            current.children[word[i]] = new Node(word[i]);
        }
        current = current.children[word[i]];
    }
    current.stoppable = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
// DFE
 WordDictionary.prototype.search = function(word) {
    const dfs = (i, node) => {
        let cur = node;
        
        for (let j = i; j < word.length; ++j) {
            if (word[j] === '.') {
                for (let child of Object.values(cur.children)) {
                    if (dfs(j + 1, child)) return true;
                }
                return false;
                
            } else {
                if (cur.children[word[j]]) {
                    cur = cur.children[word[j]];
                } else {
                    return false;
                }
            }
        }
        return cur.stoppable;
    }
    return dfs(0, this.root);
};

// BFS
WordDictionary.prototype.search = function(word) {
    const queue = [this.root];

    for (let i = 0; i < word.length; ++i) {
        if (word[i] === '.') {
            const qLen = queue.length;
            for (let j = 0; j < qLen; ++j) {
                const node = queue.shift();
                queue.push(...Object.values(node.children));
            }
        } else {
            const qLen = queue.length;
            for (let j = 0; j < qLen; ++j) {
                const node = queue.shift();
                if (node.children[word[i]]) {
                    queue.push(node.children[word[i]])
                }
            }    
        }
        if (!queue.length) return false;
    }
    
    for (let node of queue) {
        if (node.stoppable) return true;
    }
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */