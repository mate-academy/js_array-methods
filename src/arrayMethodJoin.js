'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        finJoin += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        finJoin += separator;
      }
    }

    return finJoin;
  };
}

module.exports = applyCustomJoin;
