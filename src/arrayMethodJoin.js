'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joinedStr = '';
    const arrLength = this.length;

    for (let i = 0; i < arrLength; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedStr += this[i];
      }

      if (typeof (separator) !== 'undefined' && i < arrLength - 1) {
        joinedStr += separator;
      } else if (i < arrLength - 1) {
        joinedStr += ',';
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
