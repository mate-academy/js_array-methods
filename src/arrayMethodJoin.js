'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        joined += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        joined += this[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
