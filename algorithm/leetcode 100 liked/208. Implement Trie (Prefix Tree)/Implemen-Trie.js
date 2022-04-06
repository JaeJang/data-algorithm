class Node {
    constructor() {
        this._children = {}
        this._canStopHere = false;
    }

    canStopHere() {
        return this._canStopHere;
    }
    setCanStopHere() {
        this._canStopHere = true;
    }
    insertChild(val, node) {
        if (!this.isChild(val)) this._children[val] = new Node();
    }
    
    isChild(val) {
        return !!this._children[val];
    }
    
    getChild(val) {
        return this._children[val];
    }
}

var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node.isChild(char)) {
            node.insertChild(char);
        }
        node = node.getChild(char);
    }
    node.setCanStopHere();
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.searchPrefix(word);
    return node !== null && node.canStopHere();
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) !== null;
};

Trie.prototype.searchPrefix = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (node.isChild(char)){
            node = node.getChild(char);
        } else {
            return null;
        }
    }
    return node;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */