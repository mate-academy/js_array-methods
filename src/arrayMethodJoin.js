'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorToString = separator + '';
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === undefined || element === null) {
        resultString += separatorToString;
      } else {
        resultString += element + separatorToString;
      }
    }

    const lengthSeparator = separatorToString.length;

    if (lengthSeparator === 0) {
      return resultString;
    }

    const stringWithoutLastElement = resultString.slice(0, -lengthSeparator);

    return stringWithoutLastElement;
  };
}

module.exports = applyCustomJoin;
