'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let str = '';

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
        continue;
      }

      str += this[i];
      str += separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
