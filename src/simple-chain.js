const CustomError = require("../extensions/custom-error");

const chainMaker = {
  count: 0,
  nodes: [],
  getLength() {
    return this.count
  },
  addLink(value) {
    if (value == null) {
      this.nodes.push('null')
    }
    else {
      this.nodes.push(value + '')
    }
    this.count++
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.count || typeof position != 'number') {
      this.count = 0
      this.nodes = []
      throw new Error('Index out of range')
    }
    this.nodes.splice(position - 1, 1)
    this.count--
    return this
  },
  reverseChain() {
    this.nodes.reverse()
    return this
  },
  finishChain() {
    let resultingArr = []
    this.nodes.forEach(node => {
      // console.log(node);
      resultingArr.push('( ' + node + ' )')
      resultingArr.push('~~')
    })
    resultingArr.pop()
    this.count = 0
    this.nodes = []
    return resultingArr.join('')
  }
};

module.exports = chainMaker;
