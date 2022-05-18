'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultJoin += this[i];
      }

      if (i !== this.length - 1) {
        resultJoin += separator;
      }
    }

    return resultJoin;
  };
}

module.exports = applyCustomJoin;
