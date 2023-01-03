'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const current = this[i];

      if (current !== null && current !== undefined) {
        result += current;
      }

      if (i < this.length - 1) {
        result += separator !== null ? separator.toString() : 'null';
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
