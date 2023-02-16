'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i > this.length - 2) {
        sep = '';
      }

      let word = String(this[i]);

      if (this[i] === null || this[i] === undefined) {
        word = '';
      }

      res = res + word + sep;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
