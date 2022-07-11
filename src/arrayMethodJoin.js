'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      joined += this[i];

      if (i !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
