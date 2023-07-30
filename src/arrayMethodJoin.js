'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let newArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        newArray += '';
      } else {
        newArray += this[i];
      }

      if (i < this.length - 1) { // no separator will be added to last element
        newArray += separator;
      }
    }

    return newArray;
  };
}

module.exports = applyCustomJoin;
