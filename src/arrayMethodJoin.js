'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let firstEl = this[0];

    if (firstEl === null || firstEl === undefined) {
      firstEl = '';
    }

    let joined = `${firstEl}`;

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      joined += `${separator}` + this[i];
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
