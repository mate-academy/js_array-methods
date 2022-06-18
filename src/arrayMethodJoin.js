'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const length = this.length;
    let resultJoin = '';

    for (let i = 0; i < length; i++) {
      const current = this[i];

      if (current !== undefined && current !== null) {
        resultJoin += current;
      }

      if (i < length - 1) {
        resultJoin += separator;
      }
    }

    return resultJoin;
  };
}

module.exports = applyCustomJoin;
