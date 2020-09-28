'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i];

      if (currentElement !== null && currentElement !== undefined) {
        newString += currentElement;
      }

      if (i !== this.length - 1) {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
