'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnedString = '';

    for (let i = 0; i < this.length; i++) {
      const tempWord = this[i] === undefined || this[i] === null
        ? ''
        : this[i];

      returnedString += tempWord;

      if (i !== this.length - 1) {
        returnedString += separator;
      }
    }

    return returnedString;
  };
}

module.exports = applyCustomJoin;
