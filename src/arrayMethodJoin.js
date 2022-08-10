'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringOutcome = '';
    const lastItem = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        stringOutcome += this[i];
      }

      if (i !== lastItem) {
        stringOutcome += separator;
      }
    }

    return stringOutcome;
  };
}

module.exports = applyCustomJoin;
