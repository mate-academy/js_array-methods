'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const separatorString = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined
        && this[i] !== null) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separatorString;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
