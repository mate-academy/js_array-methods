'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastIndex = this.length - 1;

    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (currentElement !== undefined && currentElement !== null) {
        resultString += currentElement;
      }

      if (i !== lastIndex) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
