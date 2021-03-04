'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length) {
      let result = '';

      for (let i = 0; i < this.length; i++) {
        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }

        if (i === 0) {
          result = `${this[0]}`;
        } else if (separator === null) {
          result += `null${this[i]}`;
        } else if (separator === undefined) {
          result += `,${this[i]}`;
        } else {
          result += separator + `${this[i]}`;
        }
      }

      return result;
    } else {
      return '';
    }
  };
}

module.exports = applyCustomJoin;
