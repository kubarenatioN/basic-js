const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof +sampleActivity != Number){
    return false
  }
  let ACTIVITIES_RATIO = MODERN_ACTIVITY / sampleActivity
  let RATE_CONSTANT = 0.693 / HALF_LIFE_PERIOD
  let ELAPSED_TIME = Math.log(ACTIVITIES_RATIO) / RATE_CONSTANT
  return Math.ceil(ELAPSED_TIME)
}
