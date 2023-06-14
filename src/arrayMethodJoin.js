'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedtring = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedtring += this[i];
      };

      if (i !== this.length - 1) {
        joinedtring += separator;
      }
    }

    return joinedtring;
  };
}

module.exports = applyCustomJoin;
