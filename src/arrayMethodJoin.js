'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const divider = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (i < this.length - 1) {
        string += divider;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
