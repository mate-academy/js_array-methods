'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let customJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        customJoin += this[i];
      }

      if (i !== this.length - 1) {
        customJoin += separator;
      }
    }

    return customJoin;
  };
}

module.exports = applyCustomJoin;
