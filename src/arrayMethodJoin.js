'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let item = 0; item < this.length; item++) {
      if (this[item] !== null && this[item] !== undefined) {
        joinedStr += this[item];
      }

      if (item < this.length - 1) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
