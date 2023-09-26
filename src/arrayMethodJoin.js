'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const elem = (this[i] === null || this[i] === undefined)
        ? ''
        : `${this[i]}`;

      if (i === this.length - 1) {
        joinedString += elem;
      } else {
        joinedString += elem + `${separator}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
