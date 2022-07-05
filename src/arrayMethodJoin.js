'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let line = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        line += this[i];
      }

      if (i !== this.length - 1) {
        line += separator;
      }
    }

    return line;
  };
}

module.exports = applyCustomJoin;
