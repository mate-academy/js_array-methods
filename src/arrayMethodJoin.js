'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';

    const endOfArray = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        stringFromArray += '';
      } else {
        stringFromArray += this[i];
      }

      if (i < endOfArray) {
        stringFromArray += separator + '';
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
