'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
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
