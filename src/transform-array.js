const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = Array.from(arr)
  for (let i = 0; i < newArr.length;) {

    if (newArr[0] == '--discard-prev' || newArr[0] == '--double-prev') {
      newArr.splice(0, 1)
    }
    else if (newArr[newArr.length - 1] == '--double-next' ||
      newArr[newArr.length - 1] == '--discard-next') {
      newArr.splice(newArr.length - 1, 1)
    }
    else if (newArr[i] == '--discard-next' && newArr[i + 1] != null) {
      newArr.DiscardNext(i)
    }
    else if (newArr[i] == '--discard-prev') newArr.DiscardPrev(i - 1)
    else if (newArr[i] == '--double-next') newArr.DoubleNext(i, newArr[i + 1])
    else if (newArr[i] == '--double-prev') newArr.DoublePrev(i, newArr[i - 1])
    else i++
  }
  newArr = newArr.filter(el => el != null)
  return newArr
};

Array.prototype.DiscardNext = function (index) {
  this.splice(index, 2, null)
}
Array.prototype.DiscardPrev = function (index) {
  this.splice(index, 2)
}
Array.prototype.DoubleNext = function (index, el) {
  this.splice(index, 1, el)
}
Array.prototype.DoublePrev = function (index, el) {
  if (el == null) {
    this.splice(index, 1)
  }
  else this.splice(index, 1, el)
}
