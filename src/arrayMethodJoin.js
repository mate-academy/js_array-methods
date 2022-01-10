'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let row = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        row += this[i];
      }

      if (i !== this.length - 1) {
        row += separator;
      }
    }

    return row;
  };
}

module.exports = applyCustomJoin;
