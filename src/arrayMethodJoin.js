'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    if (separator !== '' && separator !== undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          this[i] = '';
        }
        str += `${this[i]}${separator}`;
      }
    }

    if (separator === '') {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          this[i] = '';
        }
        str += `${this[i]}`;
      }
    }

    if (separator === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          this[i] = '';
        }
        str += `${this[i]},`;
      }
    }

    if (this[this.length - 1]) {
      str = str + this[this.length - 1];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
