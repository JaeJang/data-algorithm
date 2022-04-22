function ListNode(key, val,pre=null,next=null) {
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.head = new ListNode(0,0);
    this.tail = new ListNode(0,0);
    this.head.next = this.tail;
    this.tail.pre = this.head;
};

LRUCache.prototype.insert = function(node) {
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next.pre = node;
    this.head.next = node;
    this.map[node.key] = node;
    ++this.size;
}

LRUCache.prototype.remove = function(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    delete this.map[node.key];
    --this.size;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        const node = this.map[key];
        this.remove(node);
        this.insert(node);
        
        return node.val;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key]) {
        const node = this.map[key];
        node.val = value;
        this.remove(node);
        this.insert(node);
        return;
    }
    const newNode = new ListNode(key, value);
    if (this.size < this.capacity) {
        this.insert(newNode);
    } else {
        this.remove(this.tail.pre);
        this.insert(newNode);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
