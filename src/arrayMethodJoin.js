'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (const value of this) {
      if (value !== undefined && value !== null) {
        joinedStr += value;
      }

      if (this.indexOf(value) !== this.length - 1) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
