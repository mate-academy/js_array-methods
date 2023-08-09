'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        joinResult += separator;
      }

      if (this[i] === null || this[i] === undefined) {
        continue;
      }

      joinResult += this[i];
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
