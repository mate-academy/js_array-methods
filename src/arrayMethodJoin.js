'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sum = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        sum = sum + this[i];
      }

      if (i !== this.length - 1) {
        sum = sum + separator;
      }
    }

    return sum;
  };
}

module.exports = applyCustomJoin;
