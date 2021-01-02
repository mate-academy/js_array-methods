'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    if (!this.length) {
      return str;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i]) {
        str += this[i];
      }

      if ([NaN, 0, false].includes(this[i])) {
        str += this[i];
      };

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
