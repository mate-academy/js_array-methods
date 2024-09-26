'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = String(this[i]);

      if (this[i] !== null && this[i] !== undefined) {
        result += element;
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
