'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const newSeparator = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      result += this[i];

      if (i < this.length - 1) {
        result += newSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
