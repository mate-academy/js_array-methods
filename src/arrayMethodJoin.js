'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 1) {
      return this.toString();
    }

    let str = '';

    if (separator === null) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str += this[i];
          continue;
        }

        str += this[i] + 'null';
      }

      return str;
    }

    if (typeof separator === 'string' || typeof separator === 'object') {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          if (i === this.length - 1) {
            str += '';

            return str;
          }
          str += '' + separator;
          continue;
        }

        if (i === this.length - 1) {
          str += this[i];
          continue;
        }

        str += this[i] + separator;
      }

      return str;
    }

    return this.toString();
  };
}

module.exports = applyCustomJoin;
