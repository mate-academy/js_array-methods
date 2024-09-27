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
      if (this[i] === null || this[i] === undefined) {
        result += separator;
      } else {
        result += `${this[i]}${separator}`;
      }
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
