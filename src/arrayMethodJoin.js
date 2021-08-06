'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        joinedString += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        joinedString += separator;
      } else {
        joinedString += `${this[i]}${separator}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
