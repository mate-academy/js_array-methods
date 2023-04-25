'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this[0] !== null && this[0] !== undefined && this[0] !== '') {
      result = `${this[0]}`;
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i <= this.length - 1; i++) {
      result += separator;

      if (this[i] === null || this[i] === undefined || this[i] === '') {
        continue;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
