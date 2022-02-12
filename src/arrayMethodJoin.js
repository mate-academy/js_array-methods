'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[this.length - 1] === undefined
        && this[this.length - 1] === this[i]) {
        continue;
      }

      if (i === this.length - 1) {
        result += this[i];
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === undefined) {
        result += this[i] + ',';
        continue;
      }

      if (separator === '') {
        result += this[i];
        continue;
      }

      result += this[i] + String(separator);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
