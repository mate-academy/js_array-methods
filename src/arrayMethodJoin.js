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

    if (separator === undefined) {
      return this.toString();
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] !== undefined && this[i] !== null) {
        str += this[i];
        continue;
      }

      if (i === this.length - 1 && this[i] === undefined) {
        str += '';
        continue;
      }

      if (separator === null) {
        str += this[i] + 'null';
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        str += '' + separator;
        continue;
      }

      str += this[i] + separator.toString();
    }

    return str;
  };
}
module.exports = applyCustomJoin;
