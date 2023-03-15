'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    const modValue = function(value) {
      return value === null || value === undefined ? '' : value;
    };

    for (let i = 0; i < this.length; i++) {
      result += modValue(this[i]);

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
