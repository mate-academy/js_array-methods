'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedString = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      const result = this[i];

      if (result !== null && result !== undefined) {
        separatedString += result;
      }

      if (i < lastIndex) {
        separatedString += separator;
      }
    }

    return separatedString;
  };
}

module.exports = applyCustomJoin;
