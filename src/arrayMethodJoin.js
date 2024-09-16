'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const arrLength = this.length;
    const separatorSymbol = separator;

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      if (i === arrLength - 1) {
        resultString += this[i].toString();
      } else {
        resultString += this[i].toString() + separatorSymbol;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
