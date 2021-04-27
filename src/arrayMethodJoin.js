'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let method = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        method += this[i];
      } else {
        method += '';
      }

      if (i < this.length - 1) {
        method += separator;
      }
    }

    return method;
  };
}

module.exports = applyCustomJoin;
