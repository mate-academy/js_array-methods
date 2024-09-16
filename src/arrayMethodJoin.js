'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let rest = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        rest = rest + this[i] + separator;
      } else {
        rest += this[i];
      }
    }

    return rest;
  };
}

module.exports = applyCustomJoin;
