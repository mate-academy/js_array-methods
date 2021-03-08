'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    if (this.length >= 1 && this[0] !== null) {
      output += String(this[0]);
    }

    for (let i = 1; i < this.length; i++) {
      output += String(separator);

      if (this[i] !== null && this[i] !== undefined) {
        output += String(this[i]);
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
