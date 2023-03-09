'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      let value = this[i];

      if (value === null || value === undefined) {
        value = '';
      }

      if (i > 0 && i < this.length) {
        result += separator;
      }

      result += value;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
