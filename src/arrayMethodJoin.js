'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] === null || this[index] === undefined) {
        this[index] = '';
      }

      if (index === this.length - 1) {
        resultString += this[index];
      } else {
        resultString += this[index] + `${separator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
