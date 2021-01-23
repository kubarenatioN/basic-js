const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' } = options
  let repeaterArr = []
  let additionArr = []
  let additionStr = ''
  if (additionRepeatTimes) {
    if (typeof addition != 'string') addition = String(addition)
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition)
      additionArr.push(additionSeparator)
    }
    additionArr.pop()
    additionStr = additionArr.join('')
  }
  if (repeatTimes == undefined && additionRepeatTimes == undefined) return str + addition
  for (let i = 0; i < repeatTimes; i++) {
    if (typeof str != 'string') str = String(str)
    repeaterArr.push(str + additionStr)
    repeaterArr.push(separator)
  }
  repeaterArr.pop()
  return repeaterArr.join('')
};
  