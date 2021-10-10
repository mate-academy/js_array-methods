'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let stringFromArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      stringFromArray += this[i];

      if (i !== this.length - 1) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
