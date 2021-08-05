'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const length = this.length;

      if (i === length - 1) {
        result += this[i];
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result += this[i] + (separator + '');
    }

    return result;
  };
}

module.exports = applyCustomJoin;
