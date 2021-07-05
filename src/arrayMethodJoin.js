'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedString += `${separator}`;
      } else if (i === this.length - 1) {
        joinedString += this[i] + '';
      } else {
        joinedString += this[i] + `${separator}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
