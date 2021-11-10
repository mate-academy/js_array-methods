'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep = '';

    if (separator === undefined) {
      sep = ',';
    } else {
      sep = separator;
    }

    if (separator === null) {
      sep = 'null';
    }

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      result = this[0] + '';

      return result;
    }

    if (this[0] === null) {
      this[0] = '';
    } else {
      result = this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      result += sep + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
