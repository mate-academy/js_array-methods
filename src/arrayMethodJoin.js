'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedResult += this[i];
      }

      if (i !== this.length - 1) {
        joinedResult += separator;
      }
    }

    return joinedResult;
  };
}

module.exports = applyCustomJoin;
