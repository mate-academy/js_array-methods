'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedString = '';
    const stringSeparator = String(separator);

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += stringSeparator;
      } else {
        joinedString += this[i] + stringSeparator;
      }
    }
    joinedString += this[this.length - 1];

    return joinedString;
  };
}

module.exports = applyCustomJoin;
