'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this[0] !== null && this[0] !== undefined) {
      resultString += `${this[0]}`;
    } else {
      resultString += '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultString += `${separator}` + `${this[i]}`;
      } else {
        resultString += `${separator}` + '';
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
