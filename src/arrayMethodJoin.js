'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const sep = i < this.length - 1 ? separator : '';

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i].toString() + sep;
      } else {
        result += sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
