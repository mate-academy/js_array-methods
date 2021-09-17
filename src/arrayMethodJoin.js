'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joined += '';
      } else {
        joined += this[i];
      }

      joined += separator;
    }

    joined += this[this.length - 1];

    return joined;
  };
}

module.exports = applyCustomJoin;
