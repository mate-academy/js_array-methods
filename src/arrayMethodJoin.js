'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedSeparator = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i === 0) {
          joinedSeparator = '';
          continue;
        } else {
          joinedSeparator += `${separator}${''}`;
          continue;
        }
      } else {
        if (i === 0) {
          joinedSeparator = `${this[0]}`;
          continue;
        }
        joinedSeparator += `${separator}${this[i]}`;
      }
    }

    return joinedSeparator;
  };
}

module.exports = applyCustomJoin;
