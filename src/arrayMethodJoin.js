'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      // eslint won't let me do it
      // this[i] = this[i] ?? '';
      // result += this[i];

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i + 1 < this.length) {
        result += separator;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
