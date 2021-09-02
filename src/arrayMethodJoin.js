'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let y = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        y += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        y += separator;
      } else if (separator === null) {
        y += this[i] + 'null';
      } else {
        y += this[i] + separator;
      }
    }

    return y;
  };
}

module.exports = applyCustomJoin;
