'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let out = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        out += this[i];
      }

      if (i < this.length - 1) {
        out += separator;
      }
    }

    return out;
  };
}

module.exports = applyCustomJoin;
