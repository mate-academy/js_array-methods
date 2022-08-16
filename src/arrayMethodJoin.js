'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringOutcome = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined' && this[i] !== null) {
        stringOutcome += this[i];
      }

      if (i !== this.length - 1) {
        stringOutcome += separator;
      }
    }

    return stringOutcome;
  };
}

module.exports = applyCustomJoin;
