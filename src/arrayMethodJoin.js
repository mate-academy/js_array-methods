'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let elementsString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        elementsString += this[i];
      }

      if (i !== this.length - 1) {
        elementsString += separator;
      }
    }

    return elementsString;
  };
};

module.exports = applyCustomJoin;
