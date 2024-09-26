'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let x = 0; x < this.length; x++) {
      if (this[x] !== null && this[x] !== undefined) {
        string += this[x];
      }

      if (x !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
