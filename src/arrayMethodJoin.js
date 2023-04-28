'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      const isValid = this[i] !== null && this[i] !== undefined;

      result += (isValid ? this[i] : '') + String(separator);
    }

    const lastElement = this[this.length - 1];

    if (lastElement) {
      result += lastElement;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
