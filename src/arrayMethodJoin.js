'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedStr += separator;
      } else if (i === this.length - 1) {
        joinedStr += this[i];
      } else {
        joinedStr += `${this[i]}${separator}`;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
