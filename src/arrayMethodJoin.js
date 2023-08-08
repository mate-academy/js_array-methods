'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    joinedString += this[0] !== undefined && this[0] !== null
      ? this[0]
      : '';

    for (let i = 1; i < this.length; i++) {
      joinedString += separator;

      joinedString += this[i] !== undefined && this[i] !== null
        ? this[i]
        : '';
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
