'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        resultString += this[i].toString();
      } else {
        resultString += this[i].toString() + separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
