'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joinSeparator = separator;

    const lastIndex = this.length - 1;

    let joinedString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedString += this[i];
      }

      if (i !== lastIndex) {
        joinedString += joinSeparator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
