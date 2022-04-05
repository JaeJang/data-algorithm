class Element {
    constructor(val, min, next = null) {
        this.val = val;
        this.min = min;
    }
}

var MinStack = function() {
    this.size = 0;
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    if (this.size === 0) {
        this.stack.push(new Element(val, val))    
    } else {
        this.stack.push(new Element(val, Math.min(val, this.stack[this.size - 1].min)));
    }
    ++this.size;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    --this.size;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.size - 1].val;

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.size - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */