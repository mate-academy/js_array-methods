'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        output += String(this[i]);
      }

      if (i !== this.length - 1) {
        output += String(separator);
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
