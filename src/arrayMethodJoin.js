'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let solution = '';

    for (let i = 0; i < this.length; i++) {
      const sep = (i < this.length - 1)
        ? separator
        : '';

      switch (this[i]) {
        case undefined:
        case null:
          solution += sep;
          break;
        default:
          solution = (solution += this[i]) + sep;
      }
    }

    return solution;
  };
}

module.exports = applyCustomJoin;
