'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastElement = this[this.length - 1];

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1) {
        result += this[i];
        break;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (this[i] !== lastElement) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
