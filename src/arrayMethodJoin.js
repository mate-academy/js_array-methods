'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strjoin = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        strjoin += this[i];
      } else {
        strjoin += this[i] = '';
      }
      strjoin += separator;
    }
    strjoin += this[this.length - 1];

    return strjoin;
  };
}

module.exports = applyCustomJoin;
