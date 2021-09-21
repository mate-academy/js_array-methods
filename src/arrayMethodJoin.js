'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let reg = separator;

    if (reg === '\'') {
      return '';
    }

    if (typeof reg === 'number' && !Number.isNaN(reg)) {
      return '';
    }

    if (this.length === 0) {
      return '';
    }

    if (reg === null) {
      reg = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      } else {
        this[i] = this[i];
      }
    }

    for (let i = 0; i < this.length; i++) {
      result += (i < this.length - 1)
        ? this[i] + reg
        : this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
