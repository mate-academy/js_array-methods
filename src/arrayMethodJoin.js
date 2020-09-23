'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let index = 0; index < this.length; index++) {
      const currentElement = this[index];

      if (currentElement !== null && currentElement !== undefined) {
        resultString += currentElement;
      }

      if (index !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
