

var MinStack = function() {
    let minStack = Object.create(MinStack.prototype)
    
    minStack.items = new Array(),
    minStack.minVal = null
    minStack.topIndex = -1

    return minStack
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.topIndex++
    this.items.push([val, this.minVal])
    
    if (this.minVal === null || val < this.minVal) {
        this.minVal = val
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.minVal === this.items[this.topIndex][0]) {
        this.minVal = this.items[this.topIndex][1]
    }

    this.items.pop(this.topIndex)
    this.topIndex--
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.topIndex][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
