'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastElement = this[this.length - 1];
    const separatorString = `${separator}`;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += separatorString;
      } else {
        joinedString += this[i] + separatorString;
      }
    }

    if (lastElement !== null && lastElement !== undefined) {
      joinedString += `${lastElement}`;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
