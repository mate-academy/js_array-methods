'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let firstStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        firstStr += this[i];
      }

      if (i !== this.length - 1) {
        firstStr += separator;
      }
    }

    return firstStr;
  };
}

module.exports = applyCustomJoin;
