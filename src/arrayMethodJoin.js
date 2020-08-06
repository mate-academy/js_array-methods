'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i !== 0) {
        joined += separator;
      }
      joined += this[i];
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
