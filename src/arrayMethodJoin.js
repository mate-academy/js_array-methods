'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    if (this[0] === undefined || this[0] === null) {
      this[0] = '';
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    let str = `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (separator === undefined) {
        str += ',' + this[i];
      } else if (separator === '') {
        str += this[i];
      } else if (separator === null) {
        str += 'null' + this[i];
      } else {
        str += separator + this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
