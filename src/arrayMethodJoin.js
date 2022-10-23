'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let joinStr = '';

    for (let i = 0; i < arrLength; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      if (i !== arrLength - 1) {
        joinStr += this[i] + String(separator);
      } else {
        joinStr += this[i];
      }
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
