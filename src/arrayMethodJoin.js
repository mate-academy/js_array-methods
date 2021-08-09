'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const duplicateOfSeparator = separator + '';
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultString += separator;
        continue;
      }

      if (i === this.length - 1) {
        resultString += this[i];
      } else {
        resultString += this[i] + duplicateOfSeparator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
