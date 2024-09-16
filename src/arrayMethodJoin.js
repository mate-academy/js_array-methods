'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultString = this[0] + '';

    if (this[0] === null) {
      resultString = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      resultString += `${separator}${this[i]}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
