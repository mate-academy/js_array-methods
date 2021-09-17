'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
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
