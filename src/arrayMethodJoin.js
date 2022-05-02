'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this[0] !== undefined && this[0] !== null) {
      string += this[0];
    }

    for (let i = 0; i < this.length - 1; i++) {
      string += separator;

      if (this[i + 1] !== undefined && this[i + 1] !== null) {
        string += this[i + 1];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
