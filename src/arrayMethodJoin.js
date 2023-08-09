'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const currentElement = this[i];

      if (currentElement !== null && currentElement !== undefined) {
        string += currentElement;
      }

      if (i < this.length - 1) {
        string += separator;
      };
    }

    return string;
  };
}

module.exports = applyCustomJoin;
