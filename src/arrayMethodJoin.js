'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    if (this.length === 0) {
      return '';
    }

    if (this[0] !== null) {
      joinedString += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (separator === null) {
        joinedString += null + this[i].toString();
      } else if (this[i] === null || this[i] === undefined) {
        joinedString += separator;
      } else {
        joinedString += separator + this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
