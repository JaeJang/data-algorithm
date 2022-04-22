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
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map[key]) return -1;
    
    const node = this.map[key];
    if (this.head === node) 
        return node.val;
    if (this.tail === node) {
        this.tail = node.pre;
    } else {
        node.next.pre = node.pre;
    }
    node.pre.next = node.next;
    this.head.pre = node;
    node.next = this.head;
    this.head = node;
    this.head.pre = null;
    
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.head) {
        this.head = this.tail = new ListNode(key, value);
        this.map[key] = this.head;
        ++this.size;
        return;
    }
    if (this.map[key]) {
        this.map[key].val = value;
        const curNode = this.map[key];
        if (this.head === curNode) return;
        if (this.tail === curNode) {
            curNode.pre.next = null;
            this.tail = curNode.pre;
            this.head.pre = curNode;
            curNode.next = this.head;
            curNode.pre = null;
            this.head = curNode;
        } else {
            curNode.pre.next = curNode.next;
            curNode.next.pre = curNode.pre;
            curNode.next = this.head;
            this.head.pre = curNode;
            curNode.pre = null;
            this.head = curNode;
        }
        return;
    }
    
    if (this.size < this.capacity) {
        const newNode = new ListNode(key, value, null, this.head);
        this.head.pre = newNode;
        this.head = newNode;
        this.map[key] = newNode;
        ++this.size;
    } else {
        //console.log(this.tail);
        const newNode = new ListNode(key, value, null, this.head);
        newNode.next.pre = newNode;
        //this.head.pre = newNode;
        this.head = newNode;
        this.map[key] = newNode;
        delete this.map[this.tail.key];
        this.tail.pre.next = null;
        this.tail = this.tail.pre;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
