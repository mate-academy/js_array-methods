'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i];
      }

      resultString += separator;
    }

    if (!this[this.length - 1]) {
      return resultString;
    }

    return resultString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
