'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = this[0] + '';

    if (result === 'null') {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      result += `${separator}${this[i]}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
