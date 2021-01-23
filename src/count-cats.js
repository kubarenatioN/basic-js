// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let number = 0
  backyard.forEach(el => {
    el.forEach(innerElement => {
      if (innerElement === '^^') number++
    })
  })
  return number
};
