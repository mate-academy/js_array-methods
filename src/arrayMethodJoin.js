'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      resultString += (this[i] !== undefined && this[i] !== null)
        ? this[i] : '';

      if (i < this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
