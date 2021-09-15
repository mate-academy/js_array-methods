'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (separator === undefined) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str = str + this[i];
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          str = str + ',' + ',';
          continue;
        }
        str = str + this[i] + ',';
      }

      return str;
    }

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str = str + this[i];
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          str = str + ',' + null;
          continue;
        }
        str = str + this[i] + null;
      }

      return str;
    }

    if (separator) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str = str + this[i];
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          str = str + ',';
          continue;
        }
        str = str + this[i] + separator;
      }

      return str;
    }

    if (separator === '') {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          str = str + this[i];
          continue;
        }

        if (this[i] === null || this[i] === undefined) {
          str = str + ',';
          continue;
        }
        str = str + this[i];
      }

      return str;
    }
  };
}

module.exports = applyCustomJoin;
