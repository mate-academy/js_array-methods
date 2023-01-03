'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let methodJoinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        methodJoinResult += this[i];
      }

      if (i < this.length - 1) {
        methodJoinResult += separator;
      }
    }

    return methodJoinResult;
  };
}

module.exports = applyCustomJoin;
