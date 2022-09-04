'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length >= 0) {
      for (let i = 0; i < this.length; i++) {
        if (separator === null && i !== this.length - 1) {
          str += this[i] + 'null';
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          if (i !== this.length - 1) {
            str += separator;
          }
          continue;
        }

        if (i !== this.length - 1 && this[i] !== undefined) {
          str += this[i] + separator;
          continue;
        }

        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
