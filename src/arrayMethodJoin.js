'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';
    const lengthOfArray = this.length - 1;

    for (let i = 0; i <= lengthOfArray; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      stringFromArray += this[i];

      if (i !== lengthOfArray) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
