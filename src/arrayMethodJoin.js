'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let k = '';

    if (this.length === 1) {
      k += this[0];

      return k;
    }

    for (let a = 0; a < this.length; a++) {
      if (this[a] === null || this[a] === undefined) {
        k += separator;
        continue;
      }

      k += this[a];

      if (a === this.length - 1) {
        break;
      }

      k += separator;
    }

    return k;
  };
}

module.exports = applyCustomJoin;
