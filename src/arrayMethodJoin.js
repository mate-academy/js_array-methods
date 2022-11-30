'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let separat = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separat === null) {
        separat = 'null';
      }

      if (i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i] + separat;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
