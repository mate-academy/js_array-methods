'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinResult += this[i];
      }

      if (i !== this.length - 1) {
        joinResult += separator;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
