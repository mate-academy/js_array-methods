'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinner = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinner += '';
      } else {
        joinner += this[i];
      }

      if (i < this.length - 1) {
        joinner += separator;
      }
    }

    return joinner;
  };
}

module.exports = applyCustomJoin;
