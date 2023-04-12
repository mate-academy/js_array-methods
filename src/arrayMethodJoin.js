'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedString += '';
      } else {
        joinedString += this[i];
      }

      joinedString += `${separator}`;
    }

    if (this[this.length - 1]) {
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
