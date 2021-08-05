'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      let partOfString = this[i];

      if (this[i] === null || this[i] === undefined) {
        partOfString = '';
      }
      newString += partOfString;

      if (i !== this.length - 1) {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
