'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const inputToString = `${this}`;
    let result = '';

    if (this.length === 1 || typeof separator === 'undefined') {
      return inputToString;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
