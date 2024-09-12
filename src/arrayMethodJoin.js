'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinStr = '';

    for (let i = 0; i < this.length; i++) {
      const char = this[i];

      if (char === null || char === undefined) {
        joinStr += '';
      } else {
        joinStr += char;
      }

      if (i !== this.length - 1) {
        joinStr += separator;
      }
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
