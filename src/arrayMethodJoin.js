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

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separator;
        continue;
      }

      result += this[i];
      result += separator;
    }

    if (this[this.length - 1] === null || this[this.length - 1] === undefined) {
      result += '';
    } else {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
