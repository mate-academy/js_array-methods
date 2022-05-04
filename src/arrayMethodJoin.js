'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      let word = (this[i] === undefined || this[i] === null) ? '' : this[i];

      if (i === this.length - 1) {
        res += word;
      } else {
        res += word += String(separator);
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
