'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let stringResult = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        stringResult += this[i];
      }

      if (i !== this.length - 1) {
        stringResult += separator;
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
