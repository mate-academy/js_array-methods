'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinWithSeparator = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinWithSeparator += this[i];
      }

      if (i !== this.length - 1) {
        joinWithSeparator += separator;
      }
    }

    return joinWithSeparator;
  };
}

module.exports = applyCustomJoin;
