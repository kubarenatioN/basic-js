const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  maxDepth = 1
  currentDepth = 1
  calculateDepth(arr) {
    arr.forEach(el => {
      if (Array.isArray(el)) {
        this.currentDepth += 1
        this.calculateDepth(el)
        this.currentDepth -= 1
      }
    })
    if (this.currentDepth > this.maxDepth) this.maxDepth = this.currentDepth
    
    if (this.currentDepth == 1) {
      let result = this.maxDepth
      this.maxDepth = 0
      return result
    }
  }
};