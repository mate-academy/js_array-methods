'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedArray = '';

    for (let element = 0; element < this.length; element++) {
      if (this[element] !== null && this[element] !== undefined) {
        joinedArray += this[element];
      }

      if (element !== this.length - 1) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
