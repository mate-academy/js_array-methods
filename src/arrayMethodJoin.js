'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newSeparator = separator;
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i];
      }

      if (i + 1 !== this.length) {
        resultString += newSeparator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
