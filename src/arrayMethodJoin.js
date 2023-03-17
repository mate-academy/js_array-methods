'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        joinedString += separator;
      }

      joinedString += this[i] === null || this[i] === undefined ? '' : this[i];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
