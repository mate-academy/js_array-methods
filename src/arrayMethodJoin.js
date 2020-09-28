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
      if (this[indexOfElement] === undefined || this[indexOfElement] === null) {
        finalString += '';
      } else {
        finalString += this[indexOfElement];
      }

      if (this.length - 1 !== indexOfElement) {
        if (arguments[0] === undefined) {
          finalString += ',';
        } else {
          finalString += arguments[0];
        }
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
