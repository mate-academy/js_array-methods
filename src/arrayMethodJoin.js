'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const checker = this[i]
        ? this[i].toString()
        : '';

      if (i === this.length - 1) {
        joinedStr += checker;
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        joinedStr += checker + separator;
        continue;
      }

      joinedStr += this[i].toString() + separator;
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
