'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this === undefined || this === null || this.length === 0) {
      return '';
    }

    for (const i of this) {
      if (i !== undefined && i !== null) {
        result += i;
      }

      if (i !== this[this.length - 1]) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
