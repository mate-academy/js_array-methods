'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';
    const lengthOfArray = this.length - 1;

    for (let i = 0; i <= lengthOfArray; i++) {
      const currentElement = this[i];

      if (currentElement !== undefined && currentElement !== null) {
        stringFromArray += currentElement;
      }

      if (i !== lengthOfArray) {
        stringFromArray += separator;
      }
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
