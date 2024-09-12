'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const checker = this[i]
        ? this[i].toString()
        : '';

      if (i === this.length - 1) {
        joinedString += checker;
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        joinedString += checker + separator;
        continue;
      }

      joinedString += this[i].toString() + separator;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
