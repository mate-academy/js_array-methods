'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let value = [];

    for (let i = 0; i < this.length; i++) {
      value = this[i];

      if (value !== null && value !== undefined) {
        joinedString += value;
      }

      if (i !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
