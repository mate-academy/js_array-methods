'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (!this.length) {
      return '';
    }

    if (this[0] !== null) {
      result += `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += `${separator}`;
      } else {
        result += `${separator}${this[i]}`;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
