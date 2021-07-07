'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedString = '';

    for (let key = 0; key < this.length; key++) {
      if (this[key] !== null && this[key] !== undefined) {
        joinedString += this[key];
      }

      if (key < this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
