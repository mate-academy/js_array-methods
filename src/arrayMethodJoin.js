'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        joinedString += `${this[i] === undefined || this[i] === null
          ? '' : this[i]}${separator}`;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
