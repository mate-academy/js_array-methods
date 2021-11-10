'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joindedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joindedString += this[i];
      }

      if (i !== this.length - 1) {
        joindedString += separator;
      }
    }

    return joindedString;
  };
}

module.exports = applyCustomJoin;
