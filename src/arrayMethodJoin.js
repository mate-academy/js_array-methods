'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        output += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        output += this[i];
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
