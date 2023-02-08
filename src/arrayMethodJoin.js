'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const sep = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        string += this[i];
      }

      if (i < this.length - 1) {
        string += sep;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
