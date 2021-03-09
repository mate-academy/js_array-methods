'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let a = 0; a < this.length - 1; a++) {
      if (this[a] === null || this[a] === undefined) {
        this[a] = '';
      }
      result += this[a];
      result += separator;
    };

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
