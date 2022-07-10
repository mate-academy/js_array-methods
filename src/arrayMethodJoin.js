'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined && this[i] === this[this.length - 1]) {
        return joinedString;
      }

      if (this[i] === undefined || this[i] === null) {
        joinedString += separator;
        continue;
      }

      if (this[i] !== this[this.length - 1]) {
        joinedString += this[i];
        joinedString += separator;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
