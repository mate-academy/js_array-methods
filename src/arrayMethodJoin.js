'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joined += `${separator}`;
      } else {
        joined += `${this[i]}${separator}`;
      }
    }

    if (this[this.length - 1] !== null && this[this.length - 1] !== undefined) {
      joined += `${this[this.length - 1]}`;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
