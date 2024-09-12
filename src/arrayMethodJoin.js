'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const space = separator;

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += space;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
