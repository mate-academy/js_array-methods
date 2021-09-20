'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let reg = separator;

    if (reg === '\'') {
      return false;
    }

    if (typeof reg === 'number' && !Number.isNaN(reg)) {
      return this;
    }

    if (this.length <= 1) {
      return '' + this;
    }

    if (reg === undefined) {
      reg = ',';
    } else if (reg === null) {
      reg = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      } else if (Number.isNaN(this[i])) {
        this[i] = 'NaN';
      } else if (typeof this[i] === 'boolean' && this[i]) {
        this[i] = 'true';
      } else if (typeof this[i] === 'boolean' && !this[i]) {
        this[i] = 'false';
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
