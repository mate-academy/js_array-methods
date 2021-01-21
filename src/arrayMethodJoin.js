'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const workingArray = [];
    let result = '';
    const emptyString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        workingArray[i] = emptyString;
      } else {
        workingArray[i] = this[i];
      }
    }

    for (let i = 0; i < workingArray.length; i++) {
      if (i === 0) {
        result = String(workingArray[i]);
        continue;
      }
      result = result + String(separator) + workingArray[i];
    }

    if (!this.length) {
      return emptyString;
    }

    return String(result);
  };
}
module.exports = applyCustomJoin;
