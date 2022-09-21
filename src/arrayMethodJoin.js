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
      switch (this[i]) {
        case undefined:
        case null:
          solution += (i < this.length - 1)
            ? separator
            : '';
          break;
        default:
          solution = (solution += this[i]) + ((i < this.length - 1)
            ? separator
            : '');
      }
    }

    return solution;
  };
}

module.exports = applyCustomJoin;
