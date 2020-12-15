'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const stringJoiner = String(separator);

    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += '';
      } else {
        resultString += this[i];
      }

      if (i !== this.length - 1) {
        resultString += stringJoiner;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
