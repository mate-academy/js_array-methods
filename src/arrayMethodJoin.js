'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        resultString += '';
      } else {
        resultString += currentElement;
      }

      if (i !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
