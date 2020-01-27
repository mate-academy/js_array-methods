'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const divider = String(separator);
    let result = '';

    if (this.length === 0 || this.length === 1) {
      return String(this);
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += divider;
      } else {
        result += this[i] + divider;
      }
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
