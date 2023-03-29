'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';
    const finalSeparator = separator === undefined ? ',' : '' + separator;
    let currentElement;

    for (let i = 0; i < this.length; i++) {
      currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        currentElement = '';
      }

      if (i === this.length - 1) {
        finalString += currentElement;
      } else {
        finalString += currentElement + finalSeparator;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
