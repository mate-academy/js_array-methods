'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      (i === this.length - 1)
        ? joinedString += `${this[i]}`
        : joinedString += `${this[i]}${separator}`;
    }

    return joinedString;
  };
}
module.exports = applyCustomJoin;
