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

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separator;
      } else {
        result += this[i];
        result += separator;
      }
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
