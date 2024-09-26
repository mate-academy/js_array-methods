'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinSting = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinSting += this[i];
      }

      if (i !== this.length - 1) {
        joinSting += separator;
      }
    }

    return joinSting;
  };
}

module.exports = applyCustomJoin;
