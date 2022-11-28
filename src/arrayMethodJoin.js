'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    let mySeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null | this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        mySeparator = 'null';
      }

      if (i < this.length - 1) {
        joinedStr += this[i] + mySeparator;
      } else {
        joinedStr += this[i];
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
