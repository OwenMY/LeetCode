
var MaxStack = function() {
  this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  return this.stack.splice(this.stack.length - 1, 1);
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return Math.max(...this.stack);
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  let maxNum = Math.max(...this.stack);
  let lastMaxElement = this.stack.lastIndexOf(maxNum);
  return this.stack.splice(lastMaxElement, 1);
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */