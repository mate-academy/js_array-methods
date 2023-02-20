'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinStr += this[i];
      }

      if (i !== this.length - 1) {
        joinStr += separator;
      }
    };

    return joinStr;
  };
}

module.exports = applyCustomJoin;
