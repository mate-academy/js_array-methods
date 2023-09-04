'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const readySeparator = separator !== undefined ? String(separator) : ',';

    for (let i = 0; i < this.length; i++) {
      const value = this[i];

      if (value !== undefined && value !== null) {
        result += value;
      }

      if (i !== this.length - 1) {
        result += readySeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
