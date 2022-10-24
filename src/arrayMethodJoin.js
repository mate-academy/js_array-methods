'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let str = '';

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i !== arrLength - 1) {
        str += this[i] + String(separator);
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
