'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';

    for (let indexOfElement = 0;
      indexOfElement < this.length;
      indexOfElement++) {
      if (this[indexOfElement] !== undefined && this[indexOfElement] !== null) {
        finalString += this[indexOfElement];
      }

      if (this.length - 1 !== indexOfElement) {
        if (separator === undefined) {
          finalString += ',';
        } else {
          finalString += separator;
        }
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
