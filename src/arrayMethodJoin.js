'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        joined += separator;
      }

      if (this[i] === null || this[i] === undefined) {
        continue;
      }

      joined += this[i];
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
