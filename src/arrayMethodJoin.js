'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    if (this[0] !== undefined && this[0] !== null) {
      joined += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      joined += separator;

      if (this[i] !== undefined && this[i] !== null) {
        joined += this[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
