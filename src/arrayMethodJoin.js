'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    joined += this[0] !== undefined && this[0] !== null
      ? this[0]
      : '';

    for (let i = 1; i < this.length; i++) {
      joined += separator;

      joined += this[i] !== undefined && this[i] !== null
        ? this[i]
        : '';
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
