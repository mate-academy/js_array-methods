'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joined = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      joined += `${this[i]}${separator}`;
    }

    joined += this[this.length - 1];

    return joined;
  };
}

module.exports = applyCustomJoin;
