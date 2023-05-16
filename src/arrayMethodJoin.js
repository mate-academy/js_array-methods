'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (this[i] !== undefined && this[i] !== null) {
        resultString += item;
      }

      if (i !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
