'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {

      if (this[i] === null || this[i] === undefined) {
        joinedString += '';
      } else {
        joinedString += this[i];
      }

      if (i + 1 !== this.length) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
