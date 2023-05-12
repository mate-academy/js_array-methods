'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastIndexOfElement = this.length - 1;
    const emptyValues = [null, undefined];

    for (const element of this) {
      const indexOfElement = this.indexOf(element);

      if (!emptyValues.includes(element)) {
        joinedString += element;
      }

      if (indexOfElement !== lastIndexOfElement) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
