'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let x = '';

    for (let i = 0; i < this.length; i++) {

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      x += this[i];

      if (i !== this.length - 1) {
        x += separator;
      }
    }

    return x;
  };
}

module.exports = applyCustomJoin;
