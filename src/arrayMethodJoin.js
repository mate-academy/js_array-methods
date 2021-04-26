'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === 0) {
        result += this[i];
      } else {
        result += `${separator}${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
