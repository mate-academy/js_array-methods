'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    let value = this[0];

    if (value === undefined || value === null) {
      value = '';
    }
    result += value;

    for (let i = 1; i < this.length; i++) {
      value = this[i];

      if (value === undefined || value === null) {
        value = '';
      }
      result += `${separator}${value}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
