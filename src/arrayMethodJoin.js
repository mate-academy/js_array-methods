'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  let str = '';

  [].__proto__.join2 = function(separator = ',') {
    const symbol = separator;

    str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        str += this[i];
      }

      if (this[i] === '' && this.length - 1) {
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        str += `${symbol}`;
        continue;
      }

      if (this.length > 0 && i !== this.length - 1) {
        str += this[i] + `${symbol}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
