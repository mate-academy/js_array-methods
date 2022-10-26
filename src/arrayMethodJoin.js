'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    for (let i = 0; i < this.length; i++) {
      output += this[i] !== null && this[i] !== undefined ? this[i] : '';

      if (i !== this.length - 1) {
        output += separator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
